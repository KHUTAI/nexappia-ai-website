import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  if (window.location.pathname === "/dashboard") {
    if (!window.__NEXAPPia_DASHBOARD_SESSION_CHECK__) {
      window.__NEXAPPia_DASHBOARD_SESSION_CHECK__ = true;

      import("./lib/supabase").then(({ supabase }) => {
        supabase.auth.getSession().then(({ data }) => {
          if (!data.session) {
            window.location.href = "/signin";
          }
        });
      });
    }

    return (
      <main
        style={{
          minHeight: "100vh",
          padding: "40px",
          background: "#f7f8fc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            background: "#ffffff",
            padding: "50px 40px",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "12px",
            }}
          >
            Welcome to NexAppia AI
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#555",
              marginBottom: "40px",
            }}
          >
            Your workspace for building useful apps with plain English.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
                 <button
  type="button"
  onClick={async () => {
    const { supabase } = await import("./lib/supabase");

    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      alert("Unable to identify the signed-in user.");
      return;
    }

    window.location.href = "/appforge/";
  }}
  style={{
    padding: "24px",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "14px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
  }}
>
  Build an App
</button>

            <button
              type="button"
              style={{
                padding: "24px",
                fontSize: "18px",
                fontWeight: "600",
                borderRadius: "14px",
                border: "1px solid #ddd",
                background: "#fff",
                cursor: "pointer",
              }}
            >
              My Apps
            </button>

            <button
  type="button"
  onClick={() => {
    window.location.href = "/account";
  }}
  style={{
    padding: "24px",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "14px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
  }}
>
  Account
</button>
          </div>

          <button
  type="button"
  onClick={async () => {
    const { supabase } = await import("./lib/supabase");

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/signin";
  }}
  style={{
    marginTop: "32px",
    padding: "12px 20px",
    fontSize: "15px",
    borderRadius: "10px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  }}
>
  Sign Out
</button>
        </section>
      </main>
    );
  }

  if (window.location.pathname === "/account") {
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
            maxWidth: "480px",
            background: "#ffffff",
            padding: "50px 40px",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            Account
          </h1>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "32px",
              color: "#555",
              textAlign: "center",
            }}
          >
            Your NexAppia AI account.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/dashboard";
            }}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Back to Dashboard
          </button>

          <button
            type="button"
            onClick={async () => {
              const { supabase } = await import("./lib/supabase");

              const { error } = await supabase.auth.signOut();

              if (error) {
                alert(error.message);
                return;
              }

              window.location.href = "/signin";
            }}
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "12px",
              fontSize: "15px",
              borderRadius: "10px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </section>
      </main>
    );
  }

  if (window.location.pathname === "/signin") {
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
            maxWidth: "480px",
            background: "#ffffff",
            padding: "50px 40px",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            Sign In
          </h1>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "32px",
              color: "#555",
              textAlign: "center",
            }}
          >
            Sign in to continue to NexAppia AI.
          </p>

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Email
          </label>

          <input
            id="signin-email"
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Password
          </label>

          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginBottom: "24px",
            }}
          />

          <button
            type="button"
            onClick={async () => {
              const email =
                document.getElementById("signin-email").value;
              const password =
                document.getElementById("signin-password").value;

              if (!email || !password) {
                alert("Please enter your email and password.");
                return;
              }

              const { supabase } = await import("./lib/supabase");

              const { error } =
                await supabase.auth.signInWithPassword({
                  email,
                  password,
                });

              if (error) {
  alert(error.message);
  return;
}

window.location.href = "/dashboard";
            }}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/signup";
            }}
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "12px",
              fontSize: "15px",
              borderRadius: "10px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Create an Account
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              fontSize: "15px",
              borderRadius: "10px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </section>
      </main>
    );
  }

  if (window.location.pathname === "/signup") {
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
            maxWidth: "480px",
            background: "#ffffff",
            padding: "50px 40px",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            Create Your Account
          </h1>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "32px",
              color: "#555",
              textAlign: "center",
            }}
          >
            Start building useful apps with plain English.
          </p>

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Password
          </label>

          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Confirm Password
          </label>

          <input
            id="signup-confirm-password"
            type="password"
            placeholder="Confirm your password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginBottom: "12px",
            }}
          />

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "24px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              onChange={(event) => {
                const passwordInput =
                  document.getElementById("signup-password");
                const confirmPasswordInput = document.getElementById(
                  "signup-confirm-password"
                );

                const inputType = event.target.checked
                  ? "text"
                  : "password";

                passwordInput.type = inputType;
                confirmPasswordInput.type = inputType;
              }}
            />
            Show password
          </label>

          <button
  type="button"
  onClick={async () => {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById(
      "signup-confirm-password"
    ).value;

    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const { supabase } = await import("./lib/supabase");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Account created successfully. Please check your email to confirm your account."
    );
  }}
  style={{
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  }}
>
  Create Account
</button>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "12px",
              fontSize: "15px",
              borderRadius: "10px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </section>
      </main>
    );
  }

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
          maxWidth: "760px",
          textAlign: "center",
          background: "#ffffff",
          padding: "60px 40px",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "16px",
          }}
        >
          NexAppia AI
        </h1>

        <p
          style={{
            fontSize: "22px",
            marginBottom: "36px",
            color: "#555",
          }}
        >
          Build useful apps with plain English.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => {
              window.location.href = "/signup";
            }}
            style={{
              padding: "14px 28px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>

          <button
  type="button"
  onClick={() => {
    window.location.href = "/signin";
  }}
  style={{
    padding: "14px 28px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
  }}
>
  Sign In
</button>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);