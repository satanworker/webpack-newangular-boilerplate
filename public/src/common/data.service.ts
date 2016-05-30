import {Injectable} from "@angular/core";
@Injectable()

export class DataService {
    public portfolioItems: any = [
        {
            id: 0,
            name: 'Desktop Electron Exchange Application',
            preview: {
                description: 'Exchange panel for cryptocurrency made with MEAN stack and Electron.js library which allows Angular application to become valueable crossplatform desktop application. Project consists of satisfying UX, interesting bridges inside and some fancy CSS animations.',
            picture: ''
            },
            detail: {
                description: 'This is application built for purposes of exchanging cryptocurrency and creating new Coins. The visual part was remade few times to fulfill the expectations of perfect and beautiful UX. Design was made by me with customized materializecss framework: windows are draggable, snapping to eachother, there we have up to 3 levels of child windows opening from inside parent ones. Inside we have node.js instance running with socket.io connection to Angular front-end, Neon bridge with RUST which is integrated for API calls to server for security reasons.',
                showcases: [
                    {
                        img: '/src/assets/img/exchange_open.gif',
                        description: 'Electron application behaviour is just the same as native desktop application. It is crossplatform, fast and simply awesome. Inside we have node.js instance running with socket.io connection to front-end, NEON bridge to RUST middleware.'
                    },
                    {
                        img: '/src/assets/img/exchange_openwindows.gif',
                        description: 'Here we have a lot of interesting stuff needed to fullfill needs of brokers. Application is targeted on cryptocurrency exchange purposes.'
                    },
                    {
                        img: '/src/assets/img/exchange_dragwindows.gif',
                        description: 'Windows are draggable, and the beauty of this stack is that we can use any of customary CSS features, like animations, transitions. They all work like a charm with electorn application: you don\'t even have to care about crossbrowser problem, because electron always opens instance of Chromium.'
                    },
                    {
                        img: '/src/assets/img/exchange_reopen.gif',
                        description: 'Reopening application keeps all the windows in the same place.'
                    }
                ]
            }
        },
        {
            id: 1,
            name: 'OnlineMoney WebApp with SAAS button',
            preview: {
                description: 'Online payment service web interface. The design was provided by the client. The development consists of responsive markup, angular 2 front-end and node.js back-end. Interesting part is SAAS button with server connection.',
                picture: ''
            },
            detail: {
                description: 'Online payment service web interface. The design was provided by the client. The development consists of responsive markup, angular 2 front-end and node.js back-end. Forms validation, session authorisation, and interesting part: SAAS button "Pay with KasiPay" which can be put on any website with simple string of code and updated the server with actual data online.',
                showcases: [
                    {
                        img: '/src/assets/img/kasipay_main.gif',
                        description: 'Main feel of the application. Crazy fast!'
                    },
                    {
                        img: '/src/assets/img/kasipay_reg1.gif',
                        description: 'Registration process with validations. Interesting part is "This field is the same as that field, made with Angular data-binding: when you check this box and type something, first field gets changed too.'
                    },
                    {
                        img: '/src/assets/img/kasipay_reg2.gif',
                        description: 'Registration process with Angular 2 validators. Won\'t let you pass that easy!'
                    },
                    {
                        img: '/src/assets/img/kasipay_responsive.gif',
                        description: 'Looks pretty on mobile. Page navigation gives crazy feel when you click on menu and background page loads faster then menu closes.'
                    },
                    {
                        img: '/src/assets/img/kasipay_saas.gif',
                        description: 'SAAS button put on testing website. As soon as you fill in the data, new entry appears on the main server.'
                    },

                ]
            }
        },
        {
            id: 2,
            name: 'Advertisement Platform Dashboard',
            preview: {
                description: 'Advertisement platform dashboard with graphs and ability to create campaigns. All the security features like JwT authorisation and stuff.',
                img: ''
            },
            detail: {
                description: 'Advertisement platform dashboard built with Angular 2. Design made by me using materializecss framework using client mockups. Interesting parts are few laywers of JwT authorisation, optimized API calls and some c3 graphs.',
                showcases:[
                    {
                        img: '/src/assets/img/vortex_graphs.gif',
                        description: 'Main feel of the application. Preloader is cool :P'
                    },
                    {
                        img: '/src/assets/img/vortex_createCamp.gif',
                        description: 'Create campaign wizard. Works fast, looks pretty. Consists self-made multiselection functionality made up as component and recycable'
                    },
                    {
                        img: '/src/assets/img/vortex_auth.gif',
                        description: 'Few lawyers of authorization: if you are logged as Admin or Agency, you can authorize as child authority and browse interface if you were simple user, but your "Logout" page proudly shows "Back to Admin".'
                    },
                ]
            }
        },
        {
            id: 3,
            name: 'LogoMaker service built with canvas',
            preview: {
                description: 'Service which lets you to create logo out of svg and filled in texts. Uses canvas as engine, has all layers of protection',
                img: ''
            },
            detail: {
                description: 'In this application you can create yourself some cool logo, but you will never be able to download it unless you pay for it or hack our server, because front-end hides all data inside of canvas. Works lightning fast, weights 60kb gzipped and looks awesome on mobile.',
                showcases:[
                    {
                        img: '/src/assets/img/logomaker_1.gif',
                        description: 'Main feel of the application. Fast!'
                    },
                    {
                        img: '/src/assets/img/logomaker_chooselogo.gif',
                        description: 'Main feel of the application. Very fast!'
                    },
                    {
                        img: '/src/assets/img/logomaker_play1.gif',
                        description: 'Just playing with styles. You can even change colours of svg logo parts choosing them by click!'
                    },
                    {
                        img: '/src/assets/img/logomaker_play2.gif',
                        description: 'It\'s almost adobe illustrator, but online.'
                    },
                    {
                        img: '/src/assets/img/logomaker_canvas.gif',
                        description: 'Everything is hidden in canvas, impossible to steal.'
                    },
                    {
                        img: '/src/assets/img/logomaker_mobile.gif',
                        description: 'Yes, the service is comfortable to use from any mobile device.'
                    },

                ]
            }
        }
    ]
}