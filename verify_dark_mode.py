from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to localhost:3000
        try:
            page.goto("http://localhost:3000", timeout=60000)
        except Exception as e:
            print(f"Error navigating: {e}")
            browser.close()
            return

        # Wait for some content to load
        page.wait_for_selector("h1")

        # Wait a bit for animations/images
        time.sleep(2)

        # Take a full page screenshot
        page.screenshot(path="verification_dark_mode.png", full_page=True)

        # Also take specific screenshots of sections if needed, but full page is good.

        browser.close()
        print("Screenshot taken: verification_dark_mode.png")

if __name__ == "__main__":
    run()
