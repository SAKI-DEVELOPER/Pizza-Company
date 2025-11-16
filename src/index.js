import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    status: "Cooking",
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    status: "Cooking",
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    status: "Cooking",
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    status: "Cooking",
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
    status: "Cooking",
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
    status: "Empty",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  // pizzaData = [];
  let numPizzas = pizzaData.length;
  console.log(numPizzas);

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((p) => {
            return (
              <Pizza
                name={p.name}
                ingredients={p.ingredients}
                photo={p.photoName}
                soldOut={p.soldOut}
                price={p.price}
                status={p.status}
              />
            );
          })}
        </ul>
      ) : (
        <p
          style={{
            color: "gray",
            fontSize: "32px",
            backgroundColor: "lightgray",
          }}
        >
          Sorry we have no pizza today
        </p>
      )}
    </main>
  );
}

function Pizza({ name, ingredients, photo, soldOut, price, status }) {
  if (soldOut && status === "Empty") return null;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p className="price">{soldOut ? "" : `$${price}`}</p>
      <span>{soldOut ? "Sold Out" : "Available"}</span>
    </li>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizza</h1>
    </div>
  );
}

function Order({ clossedHour, openHour, hour }) {
  let isOpen = hour >= openHour && hour < clossedHour;
  return (
    <div className="order">
      {isOpen ? (
        <p>
          We're currently{" "}
          <span
            className="status"
            style={{ color: "green", fontWeight: "bold" }}
          >
            open
          </span>{" "}
          between {openHour}:00 and {clossedHour}:00. Come visit us or order
          online
        </p>
      ) : (
        <p>
          We're currently{" "}
          <span className="status" style={{ color: "red", fontWeight: "bold" }}>
            close
          </span>{" "}
          now
        </p>
      )}
      {isOpen ? (
        <button className="btn">Order</button>
      ) : (
        <button className="disabled">
          Order <img src="signs/no.png" alt="no" className="no"></img>{" "}
        </button>
      )}
    </div>
  );
}
function Footer() {
  let hour = new Date().getHours();
  hour = hour.toString();
  let clossedHour = 3;
  let openHour = 8;

  return (
    <footer className="footer">
      <>
        <Order openHour={openHour} clossedHour={clossedHour} hour={hour} />
      </>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
