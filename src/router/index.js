import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductView.vue'),
    props: (route) => {
      return {
        platos: [
          {
            nombre: 'Pizza',
            precio: 15.99,
            descripcion: 'Delicious pizza with a variety of toppings',
            cantidad: 10,
            imagen: require("../assets/img/pizza.jpg")
          },
          {
            nombre: 'Hamburguesa',
            precio: 12.99,
            descripcion: 'Classic burger with juicy beef and fresh lettuce',
            cantidad: 20,
            imagen: require("../assets/img/hamburguesas.jpg")
          },
          {
            nombre: 'Tacos',
            precio: 8.99,
            descripcion: 'Crispy tacos served with guacamole and sour cream',
            cantidad: 15,
            imagen: require("../assets/img/tacos.jpg")
          },
          {
            nombre: 'Ensalada Caprese',
            precio: 10.99,
            descripcion: 'Fresh mozzarella cheese on a bed of tomatoes with basil leaves',
            cantidad: 25,
            imagen: require("../assets/img/ensalada.jpg")
          },
          {
            nombre: 'Sushi',
            precio: 18.99,
            descripcion: 'Delicious sushi rolls with fresh fish and vegetables',
            cantidad: 12,
            imagen: require("../assets/img/sushi.jpg")
          },
          {
            nombre: 'Pasta al Carbonara',
            precio: 14.99,
            descripcion: 'Spaghetti served with a creamy sauce made from cream, eggs, and Parmesan cheese',
            cantidad: 18,
            imagen: require("../assets/img/pasta.jpg")

          },
          {
            nombre: 'Pad Thai',
            precio: 13.50,
            descripcion: "Stir-fried rice noodles with shrimp, eggs, peanuts, and a tamarind sauce",
            cantidad: 15,
            imagen: require("../assets/img/pad.jpg")
          },
          {
            nombre: 'Pollo Tikka Masala',
            precio: 16.95,
            descripcion: "Creamy tomato sauce with grilled chicken marinated in yogurt and spices",
            cantidad: 12,
            imagen: require("../assets/img/pollo.jpg")
          },
          {
            nombre: "Tostadas con palta",
            precio: 5.95,
            descripcion: "Whole-wheat toast topped with mashed avocado, a poached egg, and a sprinkle of red pepper flakes",
            cantidad: 2,
            imagen: require("../assets/img/tostadas.jpg")
          },
          {
            nombre: "Panqueques con arándanos y sirope de arce",
            precio: 7.50,
            descripcion: "Fluffy pancakes topped with fresh blueberries and drizzled with maple syrup",
            cantidad: 3,
            imagen: require("../assets/img/panqueques.jpg")
          },
          {
            nombre: "Huevos revueltos con queso y tocino",
            precio: 8.95,
            descripcion: "Scrambled eggs cooked with crispy bacon and shredded cheddar cheese",
            cantidad: 6,
            imagen: require("../assets/img/huevos.jpg")
          }



        ]
      }
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/404View.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
