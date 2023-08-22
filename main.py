from bs4 import BeautifulSoup
import requests
import time

def valor_dolar():
    html_text = requests.get('https://dolarhoy.com/').text
    soup = BeautifulSoup(html_text, 'lxml')

    dolar = soup.find('section', class_='modulo modulo__cotizaciones')

    dolar_compra = dolar.find('div', class_='compra')
    dolar_valor_compra = dolar_compra.find('div', class_='val').text

    dolar_venta = dolar.find('div', class_='venta')
    dolar_valor_venta = dolar_venta.find('div', class_='val').text

    print(f"Valor Compra: {dolar_valor_compra}")
    print(f"Valor Venta: {dolar_valor_venta}")

if __name__ == '__main__':
    while True:
        valor_dolar()
        time_wait = 10
        print(f"Esperando {time_wait} minutos para volver a recargar")
        time.sleep(time_wait * 60)


