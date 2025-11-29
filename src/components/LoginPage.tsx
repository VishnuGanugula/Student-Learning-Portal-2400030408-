// src/LoginPage.tsx
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { BookOpen, User, Lock, GraduationCap, Users, Shield } from "lucide-react";

export interface UserInfo {
  id: string;
  name: string;
  role: "student" | "faculty" | "admin";
}

interface LoginPageProps {
  onLogin: (userInfo: UserInfo) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState<"student" | "faculty" | "admin">("student");
  const [isLoading, setIsLoading] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState<number | null>(null);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // validate captcha before submitting
    if (!captchaInput.trim() || captchaInput.trim() !== String(captchaAnswer)) {
      setCaptchaError("Captcha answer is incorrect. Please try again.");
      return;
    }

    onLogin({
      id: userId,
      name: `${userRole} User`,
      role: userRole,
    });
  };

  useEffect(() => {
    generateCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // captcha generation
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1; // 1..9
    const b = Math.floor(Math.random() * 9) + 1;
    const op = Math.random() > 0.5 ? "+" : "-";
    const question = `${a} ${op} ${b} = ?`;
    const answer = op === "+" ? a + b : a - b;
    setCaptchaQuestion(question);
    setCaptchaAnswer(answer);
    setCaptchaInput("");
    setCaptchaError("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(135deg, #e6f7ff 0%, #f3e8ff 45%, #fff8fb 100%)",
      }}
    >
      <div className="w-full max-w-5xl flex items-center gap-0">
        
        {/* LEFT LOGO SECTION */}
        <div
          style={{
            flex: 0.9,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(180deg, rgba(124,58,237,0.12), rgba(99,102,241,0.06))",
            padding: "30px 20px",
            borderRadius: "20px 0 0 20px",
            height: "430px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ textAlign: "center", zIndex: 2 }}>
            {/* New Logo Style */}
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "22px",
                background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                marginBottom: 12,
                boxShadow: "0 10px 30px rgba(99,102,241,0.12)",
              }}
            >
              <BookOpen className="h-10 w-10 text-white" />
            </div>

            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#2b2444" }}>
              EduPortal Login
            </h2>

            <p style={{ marginTop: 6, fontSize: 14, color: "#3f3d56" }}>
              Access courses, materials and updates easily.
            </p>
          </div>

          {/* Decorative image placed bottom-right in left panel */}
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=60"
            alt="students"
            style={{
              position: "absolute",
              right: -20,
              bottom: -10,
              width: 260,
              height: "auto",
              opacity: 0.12,
              transform: "rotate(-8deg)",
            }}
          />
        </div>

        {/* DIVIDER LINE */}
        <div
          style={{
            width: "2px",
            height: "380px",
            background: "linear-gradient(180deg,#7c3aed,#06b6d4)",
            margin: "0 20px",
            borderRadius: 2,
            opacity: 0.7,
          }}
        />

        {/* LOGIN BOX */}
        <div style={{ flex: 1.3 }}>
          <Card
            className="shadow-xl"
            style={{
              borderRadius: 20,
              padding: "5px 5px",
              border: "1px solid rgba(124,58,237,0.09)",
              background: "linear-gradient(180deg,#ffffff, #fbfbff)",
              width: 420,
              margin: "0 auto",
            }}
          >
            <CardHeader>
              <CardTitle className="text-center text-xl">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Login to continue
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* USER ID */}
                <div>
                  <Label>User ID</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#7c3aed' }} />
                    <Input
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      required
                      placeholder="Enter user ID"
                      className="pl-10 h-12 rounded-xl"
                    />
                  </div>
                </div>

                {/* ROLE */}
                <div>
                  <Label>Role</Label>
                  <Select value={userRole} onValueChange={(e: any) => setUserRole(e)}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Choose role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="faculty">Faculty</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* PASSWORD */}
                <div>
                  <Label>Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#7c3aed' }} />
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter password"
                      className="pl-10 h-12 rounded-xl"
                    />
                  </div>
                </div>

                {/* BUTTON */}
                {/* CAPTCHA */}
                <div>
                  <Label>Captcha</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="px-3 py-2 rounded-xl bg-gray-100 text-sm">{captchaQuestion}</div>
                    <Input
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="Answer"
                      className="h-12 rounded-xl w-24"
                    />
                    <Button type="button" variant="outline" onClick={generateCaptcha}>Refresh</Button>
                  </div>
                  {captchaError && <p className="text-sm text-destructive mt-1">{captchaError}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl"
                  style={{
                    background: "linear-gradient(90deg,#06b6d4,#7c3aed)",
                    border: "none",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  Login
                </Button>

                {/* HELP LINE */}
                <p className="text-center text-sm text-gray-500 mt-2">
                  Need help? Contact your IT support team anytime for login issues.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
