<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PortfolioPublicApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_portfolio_endpoints_return_seeded_content(): void
    {
        $this->seed();

        $this->getJson('/api/profile')
            ->assertOk()
            ->assertJsonPath('name', 'Vano')
            ->assertJsonStructure(['name', 'headline', 'bio', 'email', 'location', 'social_links']);

        $this->getJson('/api/skills')
            ->assertOk()
            ->assertJsonFragment(['name' => 'ReactJS']);

        $this->getJson('/api/hobbies')
            ->assertOk()
            ->assertJsonFragment(['name' => 'Ngoding']);

        $this->getJson('/api/experiences')
            ->assertOk()
            ->assertJsonFragment(['title' => 'Full Stack Developer']);
    }

    public function test_contact_message_requires_valid_input(): void
    {
        $this->postJson('/api/contact-messages', [
            'name' => '',
            'email' => 'not-an-email',
            'subject' => '',
            'message' => '',
        ])->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'email', 'subject', 'message']);
    }

    public function test_contact_message_can_be_submitted_publicly(): void
    {
        $this->postJson('/api/contact-messages', [
            'name' => 'Client',
            'email' => 'client@example.com',
            'subject' => 'Project Inquiry',
            'message' => 'Saya ingin diskusi tentang website portfolio.',
        ])->assertCreated()
            ->assertJsonPath('message', 'Thanks, your message has been received.');

        $this->assertDatabaseHas('contact_messages', [
            'email' => 'client@example.com',
            'is_read' => false,
        ]);
    }
}
