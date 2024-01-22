import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [],
      curentItems: [],
      showFullItem: false,
      fullItem: {},
      items: [
        { id: 1, title: 'Холодильник', img: 'https://enter.online/images/product/2023/01/enter-frigider-samsung-rs61r5041b4-ua-10758227.webp', desc: 'Описание холодильника', category: 'technics', price: 1000 },
        { id: 2, title: 'Смартфон', img: 'https://enter.online/images/product/2023/09/enter-apple-iphone-15-314468.webp', desc: 'Описание смартфона', category: 'phones', price: 500 },
        { id: 3, title: 'Микроволновая печь', img: 'https://enter.online/images/product/2022/10/enter-cuptor-cu-microunde-samsung-me88sub-bw-034.webp', desc: 'Описание микроволновой печи', category: 'technics', price: 200 },
        { id: 4, title: 'Пылесос', img: 'https://enter.online/images/product/2023/03/enter-aspirator-thomas-drybox-amfibia-148856.webp', desc: 'Описание пылесоса', category: 'technics', price: 150 },
        { id: 5, title: 'Телевизор', img: 'https://enter.online/images/product/2022/11/enter-televizor-ud-43u6210-15460067.webp', desc: 'Описание телевизора', category: 'technics', price: 800 },
        { id: 6, title: 'Кофемашина', img: 'https://enter.online/images/product/2022/11/enter-aparat-de-cafea-philips-ep2224-40-16276264.webp', desc: 'Описание кофемашины', category: 'technics', price: 300 },
        { id: 7, title: 'Стол', img: 'https://enter.online/images/product/2023/08/enter-masa-gaming-cougar-mars-120-16655.webp', desc: 'Описание стола', category: 'technics', price: 120 },
        { id: 8, title: 'Лампа настольная', img: 'https://enter.online/images/product/2022/10/enter-lampa-de-masa-platinet-pdl6731nb-071.webp', desc: 'Описание настольной лампы', category: 'technics', price: 50 },
        { id: 9, title: 'Миксер', img: 'https://enter.online/images/product/2022/11/enter-mixer-polaris-phm6512b-3581852.webp', desc: 'Описание миксера', category: 'technics', price: 80 },
        { id: 10, title: 'Кресло', img: 'https://enter.online/images/product/2022/10/enter-scaun-gaming-arozzi-verona-v2-067.webp', desc: 'Описание кресла', category: 'technics', price: 200 },
        { id: 11, title: 'Lenovo IdeaPad 3 15ITL6', img: 'https://enter.online/images/product/2023/02/darwin-lenovo-ideapad-3-15itl6-206502.webp', desc: 'Core i3 1115G4/ 8 GB/ 256 GB/ VGA Integrată/ Gray', category: 'notebook', price: 440 },
        { id: 12, title: 'Cameră foto Canon EOS 2000D Kit', img: 'https://enter.online/images/product/2023/04/enter-camera-foto-canon-eos-2000d-kit-47469.webp', desc: 'CMOS/ Black', category: 'technics', price: 120 },
        { id: 13, title: 'Apple iPhone 15 Pro MTV03RX/ A', img: 'https://enter.online/images/product/2023/09/enter-apple-iphone-15-pro-314595.webp', desc: '8 GB/ 128 GB/ Single SIM/ Blue Titanium', category: 'phones', price: 890 },
        { id: 14, title: 'Samsung Galaxy S23 5G S911', img: 'https://enter.online/images/product/2023/02/enter-samsung-galaxy-s23-s911-195116.webp', desc: '8 GB/ 256 GB/ Dual SIM/ Beige', category: 'phones', price: 790 },
        { id: 15, title: 'Asus ROG Zephyrus M16 GU603ZM', img: 'https://enter.online/images/product/2022/10/enter-asus-rog-zephyrus-m16-gu603zm-031.webp', desc: 'Core i7 12700H/ 16 GB/ 1 TB/ GeForce RTX 3060/ Black', category: 'notebook', price: 975 },
        { id: 16, title: 'Apple MacBook Air 13.6 2022', img: 'https://enter.online/images/product/2022/11/enter-apple-macbook-air-136-2022-12812259.webp', desc: 'M2 (C8/ G8)/ 8 GB/ 256 GB/ Midnight', category: 'notebook', price: 1150 },
      ]
    }
    this.state.curentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  } 

  render() {
  return (
    <div className="wrapper" orders={ this.state.orders} >
      <Header orders = {this.state.orders} onDelete = {this.deleteOrder} />
      <Categories chooseCategory = {this.chooseCategory} />
      <Items onShowItem = {this.onShowItem} items={this.state.curentItems} onAdd = {this.addToOrder} />
      {this.state.showFullItem && <ShowFullItem onShowItem = {this.onShowItem} onAdd = {this.addToOrder} item={this.state.fullItem} />}
      <Footer />
    </div>
  );
  } 

  
  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }


  chooseCategory(category) {
    if(category === 'all'){
      this.setState({curentItems: this.state.items})
      return
    }
    this.setState({
      curentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder (id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    var isInArray = false

    this.state.orders.forEach(el => {
      if(el.id === item.id) isInArray = true
    }) 
    if (!isInArray)
    
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;