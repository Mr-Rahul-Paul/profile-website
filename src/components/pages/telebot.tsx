import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Telebot() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      {/* Message to Telegram */}
      <section className="mb-16">
        <div className="clean-card text-center">
          <h2 className="text-xl font-stretch-50% mb-2 text-white">
            Wanna reach out to me on Telegram?{" "}
          </h2>
          <p className="text-muted-foreground mb-6">
            I will recieve your message on Telegram.
          </p>
          <form
            className="flex flex-col gap-4 max-w-md mx-auto"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setError(null);
              setSuccess(false);
              try {
                const res = await fetch("/api/send-telegram", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, message, email }),
                });
                if (!res.ok) throw new Error("Failed to send");
                setSuccess(true);
                setName("");
                setEmail("");
                setMessage("");
              } catch (err: unknown) {
                let errorMsg = "Failed to send message.";
                if (
                  err &&
                  typeof err === "object" &&
                  "message" in err &&
                  typeof (err as Error).message === "string"
                ) {
                  errorMsg += ` (${(err as Error).message})`;
                }
                setError(errorMsg);
              } finally {
                setLoading(false);
              }
            }}
          >
            <input
              type="text"
              className="clean-input"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="clean-input"
              placeholder="where can i reach you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="clean-input flex-1 min-h-[80px] resize-y"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="clean"
              className="font-medium"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {success && (
              <div className="text-green-500 text-sm mt-2">Message sent!</div>
            )}
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          </form>
        </div>
      </section>
    </>
  );
}
