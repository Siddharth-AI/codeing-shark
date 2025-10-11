"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { submitLead, resetLead } from "@/store/leadSlice";
import { motion, AnimatePresence } from "framer-motion";

type LeadInlineCardProps = {
  courseTitle: string;
  className?: string;
  ctaLabel?: string;
};

export default function LeadInlineCard({
  courseTitle,
  className = "",
  ctaLabel = "Book Free Demo Class",
}: LeadInlineCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, success, error } = useSelector((s: RootState) => s.lead);

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerMobile: "",
    customerComment: "",
  });

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [focused, setFocused] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Success screen countdown
  useEffect(() => {
    if (showSuccess && countdown > 0) {
      timerRef.current = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (showSuccess && countdown === 0) {
      // Hide success screen and reset countdown
      setShowSuccess(false);
      setCountdown(5);
      dispatch(resetLead());
      // DON'T CLEAR FORM DATA - Keep it visible
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [showSuccess, countdown, dispatch]);

  // Show success screen when submission succeeds
  useEffect(() => {
    if (success) {
      setShowSuccess(true);
      setCountdown(5);
    }
  }, [success]);

  function validate(values = formData) {
    const errs: Record<string, string> = {};

    if (!values.customerName.trim()) errs.customerName = "Name is required";
    else if (values.customerName.trim().length < 2)
      errs.customerName = "Name must be at least 2 characters";

    if (!values.customerEmail.trim()) errs.customerEmail = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.customerEmail))
      errs.customerEmail = "Please enter a valid email";

    if (!values.customerMobile.trim())
      errs.customerMobile = "Mobile number is required";
    else if (!/^\d{10,15}$/.test(values.customerMobile.replace(/\s+/g, "")))
      errs.customerMobile = "Please enter a valid mobile number (10–15 digits)";

    return errs;
  }

  function handleChange<K extends keyof typeof formData>(
    key: K,
    value: string
  ) {
    const next = { ...formData, [key]: value };
    setFormData(next);
    const errs = validate(next);
    setValidationErrors((prev) => ({ ...prev, [key]: errs[key] || "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errs = validate();
    setValidationErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const leadData = {
      ...formData,
      customerMobile: `+91${formData.customerMobile}`,
      customerComment: `Interested in ${courseTitle}. ${formData.customerComment}`,
      label: "MERN",
    };

    const result = await dispatch(submitLead(leadData));

    // Clear form only after successful submission
    if (result.type === "lead/submit/fulfilled") {
      setFormData({
        customerName: "",
        customerEmail: "",
        customerMobile: "",
        customerComment: "",
      });
      setValidationErrors({});
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.5 },
        opacity: { duration: 0.2 },
      },
    },
  };

  const sparkleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0.8],
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 2,
      },
    }),
  };

  return (
    <>
      {/* Form Card - Always visible */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className={`bg-white rounded-2xl shadow-2xl p-6 border-2 border-orange-100 ${className} overflow-hidden max-w-lg w-full mt-6 mx-auto`}>
        <motion.div variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {ctaLabel}
            </h2>
            <p className="text-gray-600">
              Start learning{" "}
              <span className="text-orange-500 font-semibold">
                {courseTitle}
              </span>
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={(e) => handleChange("customerName", e.target.value)}
                  onFocus={() => setFocused("customerName")}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 text-sm transition-colors ${
                    validationErrors.customerName
                      ? "border-red-500"
                      : focused === "customerName"
                      ? "border-orange-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {validationErrors.customerName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1">
                  ⚠️ {validationErrors.customerName}
                </motion.p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={(e) =>
                    handleChange("customerEmail", e.target.value)
                  }
                  onFocus={() => setFocused("customerEmail")}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 text-sm transition-colors ${
                    validationErrors.customerEmail
                      ? "border-red-500"
                      : focused === "customerEmail"
                      ? "border-orange-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              {validationErrors.customerEmail && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1">
                  ⚠️ {validationErrors.customerEmail}
                </motion.p>
              )}
            </motion.div>

            {/* Mobile Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="customerMobile"
                  value={formData.customerMobile}
                  onChange={(e) =>
                    handleChange("customerMobile", e.target.value)
                  }
                  onFocus={() => setFocused("customerMobile")}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 text-sm transition-colors ${
                    validationErrors.customerMobile
                      ? "border-red-500"
                      : focused === "customerMobile"
                      ? "border-orange-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="1234567890"
                />
              </div>
              {validationErrors.customerMobile && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1">
                  ⚠️ {validationErrors.customerMobile}
                </motion.p>
              )}
            </motion.div>

            {/* Comment Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="customerComment"
                  value={formData.customerComment}
                  onChange={(e) =>
                    handleChange("customerComment", e.target.value)
                  }
                  onFocus={() => setFocused("customerComment")}
                  onBlur={() => setFocused(null)}
                  rows={3}
                  className={`w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 text-sm transition-colors resize-none ${
                    focused === "customerComment"
                      ? "border-orange-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Any questions or requirements?"
                />
              </div>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl">
              {loading ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block mr-2">
                    ⏳
                  </motion.span>
                  Submitting...
                </>
              ) : (
                <>
                  <Sparkles className="inline-block w-5 h-5 mr-2" />
                  {ctaLabel}
                </>
              )}
            </motion.button>

            {/* Privacy Note */}
            <motion.p
              variants={itemVariants}
              className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
              <LockKeyhole className="w-3 h-3" />
              Your information is secure and will not be shared
            </motion.p>
          </form>
        </motion.div>
      </motion.div>

      {/* Fullscreen Success Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Success Screen */}
            <motion.div
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
                <div className="text-center py-8">
                  {/* Success Icon with animated checkmark */}
                  <div className="relative inline-block mb-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                      <svg
                        className="w-12 h-12 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor">
                        <motion.path
                          variants={checkmarkVariants}
                          initial="hidden"
                          animate="visible"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>

                    {/* Sparkles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={sparkleVariants}
                        initial="hidden"
                        animate="visible"
                        className="absolute"
                        style={{
                          top: `${Math.sin((i * Math.PI) / 3) * 60 + 50}%`,
                          left: `${Math.cos((i * Math.PI) / 3) * 60 + 50}%`,
                        }}>
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Success Message */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-gray-900 mb-3">
                    Success! 🎉
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-600 mb-2">
                    Your demo class has been booked!
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-500 mb-6">
                    We'll contact you shortly.
                  </motion.p>

                  {/* Course Info Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold mb-8">
                    {courseTitle}
                  </motion.div>

                  {/* Countdown Timer */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="relative">
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                      <span>Closing in</span>
                      <motion.div
                        key={countdown}
                        initial={{ scale: 1.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 rounded-full font-bold">
                        {countdown}
                      </motion.div>
                      <span>seconds</span>
                    </div>

                    {/* Progress circle */}
                    <svg className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)]">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="#fb923c"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 1 }}
                        animate={{ pathLength: 0 }}
                        transition={{ duration: 5, ease: "linear" }}
                        style={{
                          transform: "rotate(-90deg)",
                          transformOrigin: "center",
                        }}
                      />
                    </svg>
                  </motion.div>

                  {/* Celebration Emojis */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center gap-4 mt-8 text-3xl">
                    {["🎊", "🎉", "🎈", "✨"].map((emoji, i) => (
                      <motion.span
                        key={i}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}>
                        {emoji}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
