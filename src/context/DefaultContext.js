import { createContext, useContext, useState, useEffect } from 'react';

const DefaultContext = createContext();

const DefaultProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [products, setProducts] = useState([
    {
      name: "Mom's style Ajwaini Parantha",
      image:
        'https://www.whiskaffair.com/wp-content/uploads/2017/03/Ajwain-Paratha-2.jpg',
      description: "Ajwain has such a tantalizing taste that it's a must try!",
      price: '100',
      originalPrice: '135',
      id: '1',
    },
    {
      name: "Roasted Cereal - Wheat Jowar Bajra",
      image:
        'https://thumbs.dreamstime.com/z/roasted-grains-cereals-rich-proteins-78866298.jpg',
      description: "Roasted Cereal has such a tantalizing taste that it's a must try!",
      price: '180',
      originalPrice: '235',
      id: '2',
    },
    {
      name: "Tandoori Momos",
      image:
        'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/04/07115730/070417_WowMomos_03.jpg',
      description: "Tandoori Momos has such a tantalizing taste that it's a must try!",
      price: '220',
      originalPrice: '315',
      id: '3',
    },
    {
      name: "Butter Chicken",
      image:
        'https://thumbs.dreamstime.com/b/butter-chicken-curry-coriander-naan-bread-89411506.jpg',
      description: "Butter Chicken has such a tantalizing taste that it's a must try!",
      price: '350',
      originalPrice: '435',
      id: '4',
    },
    {
      name: "Veg Chowmein",
      image:
        'https://i0.wp.com/vegecravings.com/wp-content/uploads/2019/04/Vegetarian-Chowmein-Recipe-Step-By-Step-Instructions.jpg',
      description: "Veg Chowmein has such a tantalizing taste that it's a must try!",
      price: '80',
      originalPrice: '110',
      id: '5',
    },
    {
      name: "Masala Pasta",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmQXVPkyUaDY8fyU4sWn71NddXHdHeciHEKVk2D7z&s',
      description: "Masala Pasta has such a tantalizing taste that it's a must try!",
      price: '90',
      originalPrice: '130',
      id: '6',
    },
    {
      name: "Chole Bhature",
      image:
        'https://t3.ftcdn.net/jpg/00/01/35/44/360_F_1354497_VKq5gEKm0kl8WtGHwohZ5xhDjbzrEk.jpg',
      description: "Chole Bhature has such a tantalizing taste that it's a must try!",
      price: '75',
      originalPrice: '105',
      id: '7',
    },
  ]);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  useEffect(() => {
    if (user.length !== 0) {
      localStorage.setItem('user', user);
    }
  }, [user]);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <DefaultContext.Provider
      value={{ user, setUser, products, setProducts, cart, setCart }}
    >
      {children}
    </DefaultContext.Provider>
  );
};

export const DefaultState = () => {
  return useContext(DefaultContext);
};

export default DefaultProvider;
