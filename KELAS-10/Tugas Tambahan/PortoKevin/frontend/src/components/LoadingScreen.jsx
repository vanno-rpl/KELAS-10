export default function LoadingScreen() {
    return (
        <main className="macos-loader" aria-label="Loading screen">
            <section className="boot-card liquid-glass">
                <div className="window-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="boot-mark" aria-hidden="true">K</div>
                <p className="boot-title">Kevin Portfolio</p>
                <div className="boot-progress" aria-hidden="true">
                    <span />
                </div>
            </section>
        </main>
    );
}
