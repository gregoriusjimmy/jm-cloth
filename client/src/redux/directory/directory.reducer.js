const INITIAL_STATE = {
  sections: [
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/jT0pgnP/mens.png',
      size: 'large',
      id: 2,
      linkUrl: 'shop/mens',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/gvsw4DC/womens.png',
      size: 'large',
      id: 1,
      linkUrl: 'shop/womens',
    },
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/Rhdg0XV/hats.png',
      id: 3,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/f9HCtfZ/jackets.png',
      id: 4,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/CsRXSxj/sneakers.png',
      id: 5,
      linkUrl: 'shop/sneakers',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
