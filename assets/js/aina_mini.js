// <div id='product-component-2a656ee56a5'></div>
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'habitsjanacare.myshopify.com',
      apiKey: 'cc17ad8e75de299fc8373fab08fd5f70',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [1324153536582],
        node: document.getElementById('product-component-2a656ee56a5'),
        moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "450px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#6eb427",
        "font-family": "Arial, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#63a223"
        },
        ":focus": {
          "background-color": "#63a223"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal",
        "font-size": "16px"
      },
      "description": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-size": "12px",
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#6eb427",
        "font-family": "Arial, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#63a223"
        },
        ":focus": {
          "background-color": "#63a223"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#6eb427",
        "font-family": "Arial, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "padding-left": "20px",
        "padding-right": "20px",
        ":hover": {
          "background-color": "#63a223"
        },
        ":focus": {
          "background-color": "#63a223"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Arial, sans-serif",
        "background-color": "#6eb427",
        ":hover": {
          "background-color": "#63a223"
        },
        ":focus": {
          "background-color": "#63a223"
        },
        "font-weight": "normal"
      },
      "count": {
        "font-size": "14px",
        "color": "#ffffff",
        ":hover": {
          "color": "#ffffff"
        }
      },
      "iconPath": {
        "fill": "#ffffff"
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Arial, sans-serif"
      },
      "select": {
        "font-family": "Arial, sans-serif"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();