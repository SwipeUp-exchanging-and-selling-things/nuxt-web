// User.js
export default class User {
  constructor() {
    this.id = null;
    this.name = '';
    this.number = '';
    this.email = '';
    this.password = '';
    this.photoUrl = '';
    this.region = '';
    this.vkUrl = '';
    this.tgUrl = '';
    this.subscriptionsStatus = false;
    this.subscriptionEndDate = '';
    this.subscriptionAutoRenewal = false;
    this.swipeBalance = 0.0;
  }

  logToConsole() {
    console.log('ID:', this.id);
    console.log('Name:', this.name);
    console.log('Number:', this.number);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Photo URL:', this.photoUrl);
    console.log('Region:', this.region);
    console.log('VK URL:', this.vkUrl);
    console.log('Telegram URL:', this.tgUrl);
    console.log('Subscription Status:', this.subscriptionsStatus);
    console.log('Subscription End Date:', this.subscriptionEndDate);
    console.log('Subscription Auto-Renewal:', this.subscriptionAutoRenewal);
    console.log('Swipe Balance:', this.swipeBalance);
  }
}
