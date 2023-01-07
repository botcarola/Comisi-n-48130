const productos = [
    {
        "id": 1,
        "producto" : "Nike X",
        "img": ["./assets/NI_DC4068-001-1.jpg", "./assets/NI_DC4068-001-3.jpg", "./assets/NI_DC4068-001-4.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 40000,
        "destacado": false
    },
    {
        "id": 2,
        "producto" : "Nike Z",
        "img": ["./assets/NI_DC9561-300-1.jpg", "./assets/NI_DC9561-300-3.jpg", "./assets/NI_DC9561-300-4.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 50000,
        "destacado": false
    },
    {
        "id": 3,
        "producto" : "Nike R",
        "img": ["./assets/NI_DC9992-001-1.jpg", "./assets/NI_DC9992-001-3.jpg", "./assets/NI_DC9992-001-4.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 45000,
        "destacado": true

    },
    {
        "id": 4,
        "producto" : "Nike F",
        "img": ["./assets/NI_DD1068-003-1.jpg", "./assets/NI_DD1068-003-3.jpg", "./assets/NI_DD1068-003-4.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 38000,
        "destacado": false
    },
    {
        "id": 5,
        "producto" : "Nike H",
        "img": ["./assets/NI_DH5719-100-1.jpg", "./assets/NI_DH5719-100-3.jpg", "./assets/NI_DH5719-100-6.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 47000,
        "destacado": true
    },
    {
        "id": 6,
        "producto" : "Nike J",
        "img": ["./assets/NI_DH7453-001-1.jpg", "./assets/NI_DH7453-001-3.jpg", "./assets/NI_DH7453-001-4.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 51000,
        "destacado": false
    },
    {
        "id": 7,
        "producto" : "Nike L",
        "img": ["./assets/NI_DJ6378-500-1.jpg", "./assets/NI_DJ6378-500-3.jpg", "./assets/NI_DJ6378-500-4.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 39000,
        "destacado": false
    },
    {
        "id": 8,
        "producto" : "Nike Ñ",
        "img": ["./assets/NI_DM0013-100-1.jpg", "./assets/NI_DM0013-100-3.jpg", "./assets/NI_DM0013-100-4.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 43900,
        "destacado": true
    },
    {
        "id": 9,
        "producto" : "Nike T",
        "img": ["./assets/NI_DO2194-001-1.jpg", "./assets/NI_DO2194-001-3.jpg", "./assets/NI_DO2194-001-4.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 57000,
        "destacado": false
    },
    {
        "id": 10,
        "producto" : "Nike A",
        "img": ["./assets/NI_DQ5016-100-1.jpg", "./assets/NI_DQ5016-100-3.jpg", "./assets/NI_DQ5016-100-4.jpg"],
        "description": "Confeccionado para obtener ultra comodidad en cada pisada, con entresuela de espuma suave brindando ligereza y capellada de malla combinado con sintético. Son aptas para todos los días y combinables por su diseño elegante. Tambien son de alto rendimiento, gracias a la amortiguación Nike Air.",
        "origen": "Importado",
        "marca": "Nike",
        "garantia": "Por defecto de fabricación.",
        "precio": 46800,
        "destacado": false
    }
]