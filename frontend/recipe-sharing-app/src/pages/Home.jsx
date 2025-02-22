import React, { useEffect } from "react"
import homepage from "../assets/homepage.jpg"
import RecipeItems from "../components/RecipeItems"

export default function Home() {
  useEffect(() => {
    document.body.style.overflowX = "hidden" 
    return () => {
      document.body.style.overflowX = "auto"
    }
  }, [])

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${homepage})`,
          width: "100vw",
          height: "100vh", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Unlock the chef in you!
        </h1>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "15px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Share Your Recipe
        </button>
      </section>
      <div className="recipe" style={{ padding: "20px" }}>
        <RecipeItems />
      </div>
    </>
  );
}
