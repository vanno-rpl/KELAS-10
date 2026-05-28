<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class AdminApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_routes_require_authentication(): void
    {
        $this->getJson('/api/admin/projects')->assertUnauthorized();
        $this->postJson('/api/admin/projects', [])->assertUnauthorized();
        $this->getJson('/api/admin/hobbies')->assertUnauthorized();
        $this->postJson('/api/admin/hobbies', [])->assertUnauthorized();
    }

    public function test_authenticated_admin_can_manage_projects(): void
    {
        User::create([
            'name' => 'Vano Admin',
            'email' => 'admin@vano.test',
            'password' => Hash::make('password'),
        ]);

        $token = $this->postJson('/api/login', [
            'email' => 'admin@vano.test',
            'password' => 'password',
        ])->json('token');

        $headers = ['Authorization' => 'Bearer '.$token];

        $created = $this->withHeaders($headers)->postJson('/api/admin/projects', [
            'title' => 'Dashboard Inventory',
            'slug' => 'dashboard-inventory',
            'summary' => 'A clean stock management dashboard.',
            'description' => 'Dashboard untuk memantau stok, transaksi, dan laporan.',
            'tech_stack' => ['React', 'Laravel', 'SQLite'],
            'demo_url' => 'https://example.com/demo',
            'repository_url' => 'https://github.com/example/dashboard',
            'image_url' => 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
            'is_featured' => true,
        ]);

        $created->assertCreated()
            ->assertJsonPath('slug', 'dashboard-inventory');

        $this->getJson('/api/projects')
            ->assertOk()
            ->assertJsonFragment(['slug' => 'dashboard-inventory']);

        $this->withHeaders($headers)->putJson('/api/admin/projects/'.$created->json('id'), [
            'title' => 'Dashboard Inventory Updated',
            'slug' => 'dashboard-inventory-updated',
            'summary' => 'Updated dashboard summary.',
            'description' => 'Updated dashboard detail.',
            'tech_stack' => ['React', 'Laravel'],
            'demo_url' => null,
            'repository_url' => null,
            'image_url' => null,
            'is_featured' => false,
        ])->assertOk()
            ->assertJsonPath('slug', 'dashboard-inventory-updated');

        $this->withHeaders($headers)
            ->deleteJson('/api/admin/projects/'.$created->json('id'))
            ->assertNoContent();

        $this->assertDatabaseMissing('projects', ['slug' => 'dashboard-inventory-updated']);
    }

    public function test_authenticated_admin_can_upload_portfolio_image(): void
    {
        Storage::fake('public');

        User::create([
            'name' => 'Vano Admin',
            'email' => 'admin@vano.test',
            'password' => Hash::make('password'),
        ]);

        $token = $this->postJson('/api/login', [
            'email' => 'admin@vano.test',
            'password' => 'password',
        ])->json('token');

        $path = sys_get_temp_dir().DIRECTORY_SEPARATOR.'portfolio-upload-test.png';
        file_put_contents($path, base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII='));

        $response = $this->withHeader('Authorization', 'Bearer '.$token)
            ->postJson('/api/admin/uploads', [
                'image' => new UploadedFile($path, 'project.png', 'image/png', null, true),
            ]);

        $response->assertCreated()
            ->assertJsonStructure(['url']);

        Storage::disk('public')->assertExists(
            str_replace('/storage/', '', $response->json('url'))
        );
    }

    public function test_authenticated_admin_can_manage_hobbies(): void
    {
        User::create([
            'name' => 'Vano Admin',
            'email' => 'admin@vano.test',
            'password' => Hash::make('password'),
        ]);

        $token = $this->postJson('/api/login', [
            'email' => 'admin@vano.test',
            'password' => 'password',
        ])->json('token');

        $headers = ['Authorization' => 'Bearer '.$token];

        $created = $this->withHeaders($headers)->postJson('/api/admin/hobbies', [
            'name' => 'Fotografi',
            'description' => 'Mengambil foto untuk latihan komposisi visual.',
            'icon' => 'Camera',
            'sort_order' => 1,
        ]);

        $created->assertCreated()
            ->assertJsonPath('name', 'Fotografi');

        $this->getJson('/api/hobbies')
            ->assertOk()
            ->assertJsonFragment(['name' => 'Fotografi']);

        $this->withHeaders($headers)->putJson('/api/admin/hobbies/'.$created->json('id'), [
            'name' => 'Fotografi Digital',
            'description' => 'Latihan komposisi visual dan editing ringan.',
            'icon' => 'Camera',
            'sort_order' => 2,
        ])->assertOk()
            ->assertJsonPath('name', 'Fotografi Digital');

        $this->withHeaders($headers)
            ->deleteJson('/api/admin/hobbies/'.$created->json('id'))
            ->assertNoContent();

        $this->assertDatabaseMissing('hobbies', ['name' => 'Fotografi Digital']);
    }
}
