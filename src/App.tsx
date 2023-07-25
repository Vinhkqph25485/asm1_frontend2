// import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";

// import { ICar } from "./interfaces/car";
// import { List,Table  } from "./components";
// import Form from "./components/Form";

// const carsData = [
//     { id: 1, name: "BMW", price: 100 },
//     { id: 2, name: "Mercedes", price: 150 },
//     { id: 3, name: "Audi", price: 200 },
// ];

// const columns = [
//     { title: "Tên sản phẩm", dataIndex: "name", key: "name" }, // column
//     { title: "price", dataIndex: "price", key: "price" }, // column
// ];

// //================================================
// const postData = [
//     { id: 1, title: "POST 1", body: "This is post 1", author: "Datlt" },
//     { id: 2, title: "POST 2", body: "This is post 2", author: "Sontv" },
// ];

// const columns1 = [
//     { title: "Tiêu đề", dataIndex: "title", key: "title" }, // column
//     { title: "Body", dataIndex: "body", key: "body" }, // column
//     { title: "Author", dataIndex: "author", key: "author" }, // column
// ];

function App() {
   

    return (
        <>
            <div className="w-96 border border-red-500 mx-auto my-5">
                <ProductList/>
             <hr />
            </div>
        </>
    );
}

export default App;
