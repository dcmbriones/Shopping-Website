//this builds the Cart section located on the right side of the screen
//It has the delete and modify quantity buttons

const Cart = ({ items, onDelete, onQuantityChange }) => {
    return (
      <div style={{ width: "30%", padding: "1rem", borderLeft: "1px solid gray", backgroundColor: "#fff2f4", minHeight: "100vh", }}>
        <h2>🛒 Cart</h2>
        {items.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  border: "1px solid #ccc",
                  borderRadius: "15px",
                  padding: "0.5rem",
                  alignItems: "center",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginRight: "1rem",
                  }}
                />
                <div style={{ flexGrow: 1 }}>
                  <p style={{ margin: "0", fontWeight: "bold" }}>{item.name}</p>
                  <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
                    <button
                      onClick={() => onQuantityChange(index, -1)}
                      disabled={item.quantity <= 1}
                      style={{ padding: "0.25rem 0.5rem", marginRight: "0.5rem" }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onQuantityChange(index, 1)}
                      style={{ padding: "0.25rem 0.5rem", marginLeft: "0.5rem" }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onDelete(index)}
                  style={{
                    marginLeft: "1rem",
                    background: "none",
                    border: "none",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    color: "red"
                  }}
                  title="Delete item"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}
        <p style={{ marginTop: "1rem" }}>
          <strong>Total Items:</strong> {items.reduce((sum, item) => sum + item.quantity, 0)}
        </p>
      </div>
    );
  };
  
  export default Cart;
  