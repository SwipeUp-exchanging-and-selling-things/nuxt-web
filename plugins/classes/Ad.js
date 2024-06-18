// ad.js
export default class ad {
  constructor() {
    this.status = 'active';
    this.category = '';
    this.subcategory = '';
    this.title = '';
    this.description = '';
    this.format = 'standard';
    this.price = null;
    this.address = '';
    this.delivery = {
      pickup: false,
      shipping: false
    };
    this.communication = {
      phone: false,
      email: false,
      telegram: false,
      whatsapp: false
    };
    this.img_url = {
      url1: null,
      url2: null,
      url3: null
    };
    this.img = {
      img1: null,
      img2: null,
      img3: null
    };
  }

  logToConsole() {
    console.log('Статус:', this.status);
    console.log('Категория:', this.category);
    console.log('Подкатегория:', this.subcategory);
    console.log('Название:', this.title);
    console.log('Описание:', this.description);
    console.log('Формат размещения:', this.status);
    console.log('Цена:', this.price);
    console.log('Адрес:', this.address);
    console.log('Доставка:');
    console.log('  Самовывоз:', this.delivery.pickup);
    console.log('  Отправка за счет покупателя:', this.delivery.shipping);
    console.log('Удобный способ связи:');
    console.log('  Телефон:', this.communication.phone);
    console.log('  Почта:', this.communication.email);
    console.log('  Телеграм:', this.communication.telegram);
    console.log('  WhatsApp:', this.communication.whatsapp);
    console.log('URL изображений:');
    console.log('  Изображение 1:', this.img_url.url1);
    console.log('  Изображение 2:', this.img_url.url2);
    console.log('  Изображение 3:', this.img_url.url3);
  }
}
