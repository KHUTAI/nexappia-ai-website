import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  if (window.location.pathname === "/dashboard") {
    if (!window.__NEXAPPIA_DASHBOARD_SESSION_CHECK__) {
      window.__NEXAPPIA_DASHBOARD_SESSION_CHECK__ = true;

      import("./lib/supabase")
        .then(({ supabase }) => {
          supabase.auth.getSession().then(({ data, error }) => {
            if (error || !data.session) {
              window.location.replace("/signin");
            }
          }).catch(() => {
            window.location.replace("/signin");
          });
        })
        .catch(() => {
          window.location.replace("/signin");
        });
    }

    return (

    <main
      style={{
        minHeight: "100vh",
        padding: "48px 20px",
        boxSizing: "border-box",
        background: "#080d1c",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "1000px",
          boxSizing: "border-box",
          margin: "0 auto",
          padding: "48px 40px",
          background: "#111a2e",
          border: "1px solid #263653",
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        }}
      >
        <p
          style={{
            color: "#60a5fa",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "3px",
            marginBottom: "12px",
          }}
        >
          YOUR WORKSPACE
        </p>

        <h1
          style={{
            fontSize: "40px",
            lineHeight: "1.2",
            marginBottom: "16px",
            color: "#f8fafc",
          }}
        >
          Welcome to NexAppia AI
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#cbd5e1",
            marginBottom: "36px",
          }}
        >
          Your workspace for building useful apps with plain English.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
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

              window.location.href =
                "https://appforge-ai-builder-eight.vercel.app/";
            }}
            style={{
              padding: "22px",
              fontSize: "17px",
              fontWeight: "700",
              color: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #3b82f6",
              background: "#2563eb",
              cursor: "pointer",
            }}
          >
            Build an App →
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/account";
            }}
            style={{
              padding: "22px",
              fontSize: "17px",
              fontWeight: "700",
              color: "#f8fafc",
              borderRadius: "12px",
              border: "1px solid #334155",
              background: "#17233a",
              cursor: "pointer",
            }}
          >
            Account →
          </button>
        </div>

        <div
          style={{
            marginTop: "32px",
            paddingTop: "24px",
            borderTop: "1px solid #263653",
          }}
        >
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
              padding: "12px 18px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#cbd5e1",
              borderRadius: "10px",
              border: "1px solid #334155",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </div>
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
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 20px",
          boxSizing: "border-box",
          background: "#080d1c",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "440px",
            boxSizing: "border-box",
            background: "#111a2e",
            color: "#f8fafc",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid #263653",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "12px",
              textAlign: "center",
              color: "#f8fafc",
            }}
          >
            Welcome back
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "32px",
              color: "#cbd5e1",
              textAlign: "center",
            }}
          >
            Sign in to continue to NexAppia AI.
          </p>

          <label
            htmlFor="signin-email"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#e2e8f0",
            }}
          >
            Email
          </label>

          <input
            id="signin-email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              color: "#f8fafc",
              background: "#080d1c",
              borderRadius: "10px",
              border: "1px solid #334155",
              marginBottom: "20px",
            }}
          />

          <label
            htmlFor="signin-password"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#e2e8f0",
            }}
          >
            Password
          </label>

          <input
            id="signin-password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              color: "#f8fafc",
              background: "#080d1c",
              borderRadius: "10px",
              border: "1px solid #334155",
              marginBottom: "24px",
            }}
          />

          <button
            type="button"
            onClick={async () => {
              const email =
                document.getElementById("signin-email").value.trim();
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
              fontWeight: "700",
              color: "#ffffff",
              background: "#2563eb",
              borderRadius: "10px",
              border: "1px solid #3b82f6",
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
              fontWeight: "600",
              color: "#60a5fa",
              borderRadius: "10px",
              border: "1px solid #334155",
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
              color: "#cbd5e1",
              borderRadius: "10px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            ← Back to Home
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
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 20px",
          boxSizing: "border-box",
          background: "#080d1c",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "440px",
            boxSizing: "border-box",
            background: "#111a2e",
            color: "#f8fafc",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid #263653",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              marginBottom: "12px",
              textAlign: "center",
              color: "#f8fafc",
            }}
          >
            Create Your Account
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "28px",
              color: "#cbd5e1",
              textAlign: "center",
            }}
          >
            Start building useful apps with plain English.
          </p>

          <label
            htmlFor="signup-email"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#e2e8f0",
            }}
          >
            Email
          </label>

          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              color: "#f8fafc",
              background: "#080d1c",
              borderRadius: "10px",
              border: "1px solid #334155",
              marginBottom: "18px",
            }}
          />

          <label
            htmlFor="signup-password"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#e2e8f0",
            }}
          >
            Password
          </label>

          <input
            id="signup-password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              color: "#f8fafc",
              background: "#080d1c",
              borderRadius: "10px",
              border: "1px solid #334155",
              marginBottom: "18px",
            }}
          />

          <label
            htmlFor="signup-confirm-password"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#e2e8f0",
            }}
          >
            Confirm Password
          </label>

          <input
            id="signup-confirm-password"
            type="password"
            autoComplete="new-password"
            placeholder="Confirm your password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              fontSize: "16px",
              color: "#f8fafc",
              background: "#080d1c",
              borderRadius: "10px",
              border: "1px solid #334155",
              marginBottom: "16px",
            }}
          />

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              marginBottom: "22px",
              color: "#cbd5e1",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            <input
              id="signup-show-password"
              type="checkbox"
              onChange={(event) => {
                const type = event.target.checked ? "text" : "password";
                document.getElementById("signup-password").type = type;
                document.getElementById("signup-confirm-password").type = type;
              }}
            />
            Show password
          </label>

          <button
            type="button"
            onClick={async () => {
              const email =
                document.getElementById("signup-email").value.trim();
              const password =
                document.getElementById("signup-password").value;
              const confirmPassword =
                document.getElementById("signup-confirm-password").value;

              if (!email || !password || !confirmPassword) {
                alert("Please complete all fields.");
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
                "Account request submitted. Follow any email confirmation instructions."
              );
              window.location.href = "/signin";
            }}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
              background: "#2563eb",
              borderRadius: "10px",
              border: "1px solid #3b82f6",
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
              width: "100%",
              marginTop: "16px",
              padding: "12px",
              fontSize: "15px",
              fontWeight: "600",
              color: "#60a5fa",
              borderRadius: "10px",
              border: "1px solid #334155",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Already have an account? Sign In
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
              color: "#cbd5e1",
              borderRadius: "10px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </button>
        </section>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080d1c",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "26px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "800",
            letterSpacing: "-1px",
          }}
        >
          NexAppia<span style={{ color: "#60a5fa" }}> AI</span>
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/signin"
            style={{
              color: "#e2e8f0",
              textDecoration: "none",
              padding: "12px 16px",
            }}
          >
            Sign In
          </a>
          <a
            href="/signup"
            style={{
              color: "#ffffff",
              background: "#2563eb",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "10px",
              fontWeight: "700",
            }}
          >
            Get Started
          </a>
        </nav>
      </header>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "90px 24px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          alignItems: "center",
          gap: "56px",
        }}
      >
        <div>
          <p
            style={{
              color: "#93c5fd",
              fontSize: "13px",
              fontWeight: "800",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Your ideas. Your apps. Your ownership.
          </p>

          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 70px)",
              lineHeight: "1.08",
              letterSpacing: "-2.5px",
              margin: "0 0 24px",
            }}
          >
            Build it.
            <br />
            <span style={{ color: "#60a5fa" }}>Own it.</span>
            <br />
            Take it with you.
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "570px",
              marginBottom: "32px",
            }}
          >
            Turn your ideas into useful apps using plain English.
            Start with your idea, shape your app, preview your work,
            and take your creation with you.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/signup"
              style={{
                display: "inline-block",
                background: "#2563eb",
                color: "#ffffff",
                padding: "16px 24px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Start Building Free →
            </a>

            <a
              href="/signin"
              style={{
                display: "inline-block",
                color: "#ffffff",
                padding: "15px 24px",
                border: "1px solid #475569",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Sign In
            </a>
          </div>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "13px",
              marginTop: "22px",
            }}
          >
            Your idea starts here. Your next step is yours.
          </p>
        </div>

        <div
          style={{
            padding: "clamp(22px, 4vw, 38px)",
            borderRadius: "24px",
            border: "1px solid #334155",
            background:
              "linear-gradient(145deg, #172554 0%, #111827 60%, #0f172a 100%)",
            boxShadow: "0 30px 80px rgba(37, 99, 235, 0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "28px",
            }}
          >
            {["#f87171", "#fbbf24", "#4ade80"].map((color) => (
              <span
                key={color}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: color,
                }}
              />
            ))}
          </div>

          <p
            style={{
              color: "#93c5fd",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            FROM IDEA TO APP
          </p>

          <h2
            style={{
              fontSize: "30px",
              lineHeight: "1.25",
              margin: "0 0 14px",
            }}
          >
            What would you like to build?
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
              marginBottom: "28px",
            }}
          >
            Describe your idea in plain English. Shape it into an app
            that fits your needs.
          </p>

          {[
            ["01", "Describe your idea"],
            ["02", "Preview your app"],
            ["03", "Export your creation"],
          ].map(([number, label]) => (
            <div
              key={number}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "17px 0",
                borderTop: "1px solid #334155",
              }}
            >
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: "38px",
                  height: "38px",
                  flexShrink: 0,
                  borderRadius: "10px",
                  background: "#1e3a8a",
                  color: "#bfdbfe",
                  fontWeight: "800",
                }}
              >
                {number}
              </span>
              <span style={{ fontWeight: "600" }}>{label}</span>
            </div>
          ))}

          <p
            style={{
              color: "#94a3b8",
              fontSize: "12px",
              marginTop: "18px",
            }}
          >
            Available export options depend on the app and supported
            build targets.
          </p>
        </div>
      </section>

      <section
        style={{
          background: "#0f172a",
          borderTop: "1px solid #1e293b",
          borderBottom: "1px solid #1e293b",
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              letterSpacing: "-1px",
              marginBottom: "14px",
            }}
          >
            Your idea. Your journey.
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "17px",
              lineHeight: "1.7",
              maxWidth: "650px",
              marginBottom: "36px",
            }}
          >
            Move from a plain-English description to a preview, then
            explore the export options available for your app.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                number: "01",
                title: "Describe",
                description:
                  "Explain what you want to build in everyday language.",
              },
              {
                number: "02",
                title: "Preview",
                description:
                  "Review your app and refine your idea before exporting.",
              },
              {
                number: "03",
                title: "Take it with you",
                description:
                  "Explore supported export options for your finished app.",
              },
            ].map((item) => (
              <article
                key={item.number}
                style={{
                  padding: "26px",
                  border: "1px solid #334155",
                  borderRadius: "16px",
                  background: "#111c31",
                }}
              >
                <p
                  style={{
                    color: "#60a5fa",
                    fontWeight: "800",
                    fontSize: "13px",
                    letterSpacing: "2px",
                  }}
                >
                  STEP {item.number}
                </p>
                <h3 style={{ fontSize: "22px", margin: "14px 0 10px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#cbd5e1", lineHeight: "1.8", margin: 0 }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "36px" }}>
            <a
              href="/signup"
              style={{
                display: "inline-block",
                background: "#2563eb",
                color: "#ffffff",
                padding: "15px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Bring Your Idea to Life →
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "30px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          color: "#94a3b8",
          fontSize: "14px",
        }}
      >
        <span>© {new Date().getFullYear()} NexAppia AI</span>
        <span>Build it. Own it. Take it with you.</span>
        <a
          href="/signin"
          style={{ color: "#cbd5e1", textDecoration: "none" }}
        >
          Sign In
        </a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
