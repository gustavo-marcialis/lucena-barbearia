from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navegar para a página inicial
            page.goto("http://localhost:3000", timeout=60000)

            # Esperar o carregamento inicial (fonts, etc)
            page.wait_for_timeout(5000)

            # Rolar até a seção de serviços onde está a tabela de preços
            servicos_section = page.locator("#servicos")
            servicos_section.scroll_into_view_if_needed()

            # Tirar screenshot da seção de serviços inteira
            page.locator("#servicos").screenshot(path="verification/servicos_com_tabela.png")

            # Tirar screenshot do banner para ver as fontes do título
            page.locator(".banner").screenshot(path="verification/banner_fontes.png")

            print("Screenshots salvos em verification/")

        except Exception as e:
            print(f"Erro: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
