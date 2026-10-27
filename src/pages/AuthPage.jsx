import { useState } from "react";

export default function AuthPage() {
  const [mode, setMode] = useState("signin");

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        background: "#f7f8fc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>NexAppia AI</h1>

        <p style={{ color: "#666", marginBottom: "28px" }}>
          {mode === "signup"
            ? "Create your NexAppia account."
            : "Sign in to your NexAppia account."}
        </p>

        {mode === "signup" && (
          <input
            type="text"
            placeholder="Your name"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "14px",
              boxSizing: "border-box",
            }}
          />
        )}

        <input
          type="email"
          placeholder="Email address"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "14px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <button
  type="button"
  onClick={() => alert("Create Account button clicked")}
  style={{
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  }}
>
  {mode === "signup" ? "Create Account" : "Sign In"}
</button>

        <button
          type="button"
          onClick={() =>
            setMode(mode === "signup" ? "signin" : "signup")
          }
          style={{
            width: "100%",
            marginTop: "16px",
            padding: "12px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {mode === "signup"
            ? "Already have an account? Sign In"
            : "New to NexAppia? Create Account"}
        </button>
      </section>
    </main>
  );
}