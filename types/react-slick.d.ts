declare module 'react-slick' {
    import { Component } from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      adaptiveHeight?: boolean;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      prevArrow?: React.ReactNode;
      nextArrow?: React.ReactNode;
      responsive?: Array<{
        breakpoint: number;
        settings: {
          slidesToShow: number;
          slidesToScroll: number;
        };
      }>;
    }
  
    export default class Slider extends Component<Settings> {}
  }
  