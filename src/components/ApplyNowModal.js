"use client";

import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { toast } from "sonner";

export default function ApplyNowModal({ open, onClose }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const serviceRef = useRef();

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const html = document.documentElement;

    html.style.position = "fixed";
    html.style.top = `-${scrollY}px`;
    html.style.width = "100%";

    return () => {
      html.style.position = "";
      html.style.top = "";
      html.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  
  const emailMutation = useMutation({
    mutationFn: async(payload) => {
      const res = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if(!data.success) {
        throw new Error(data.error || "Couldn't send message")
      }
      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Success");
      onClose();
    },
    onError: (err) => {
      toast.error(err.error || "Sending Message Failed!!!")
    }
  })
  if (!open) return null;
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      contact: contactRef.current.value,
      service: serviceRef.current.value,
    };

    emailMutation.mutate(data);
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-center mb-6">
          Apply Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            ref={nameRef}
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <input
            ref={emailRef}
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <input
            ref={contactRef}
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <select
            ref={serviceRef}
            className="w-full border rounded-lg px-4 py-3"
            required
          >
            <option value="">Select Service</option>
            <option value="Study Abroad">Study Abroad</option>
            <option value="Test Preparation">Test Preparation</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
            disabled = {emailMutation.isPending}
          >
            {emailMutation.isPending ? "Submitting" : "Submit"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 text-gray-600"
          >
            Close
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
