"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Sparkles, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { submitLead, resetLead } from "@/store/leadSlice";
import { RootState, AppDispatch } from "@/store";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  dynamicClick: boolean;
}

const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  courseTitle,
  dynamicClick,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, success, error } = useSelector(
    (state: RootState) => state.lead
  );

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerMobile: "",
    customerComment: "",
  });

  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(5);
  const [showSuccess, setShowSuccess] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.customerName.trim()) {
      errors.customerName = "Name is required";
    } else if (formData.customerName.trim().length < 2) {
      errors.customerName = "Name must be at least 2 characters";
    }

    if (!formData.customerEmail.trim()) {
      errors.customerEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      errors.customerEmail = "Please enter a valid email";
    }

    if (!formData.customerMobile.trim()) {
      errors.customerMobile = "Mobile number is required";
    } else if (
      !/^[0-9]{10,15}$/.test(formData.customerMobile.replace(/\s+/g, ""))
    ) {
      errors.customerMobile =
        "Please enter a valid mobile number (10-15 digits)";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const leadData = {
      ...formData,
      customerMobile: `+91${formData.customerMobile}`,
      customerComment: `Interested in ${courseTitle}. ${formData.customerComment}`,
      label: "MERN",
    };

    const result = await dispatch(submitLead(leadData));

    if (result.type === "lead/submit/fulfilled") {
      // Clear form
      setFormData({
        customerName: "",
        customerEmail: "",
        customerMobile: "",
        customerComment: "",
      });
      setValidationErrors({});

      // Show success screen
      setShowSuccess(true);
      setCountdown(5);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: "",
      });
    }
  };

  const handleClose = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Reset all states
    setShowSuccess(false);
    setCountdown(5);
    dispatch(resetLead());

    // Close modal
    onClose();
  };

  // Handle modal open
  useEffect(() => {
    if (isOpen) {
      setShowSuccess(false);
      setCountdown(5);
      dispatch(resetLead());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isOpen, dispatch]);

  // Countdown timer - Only runs when showSuccess is true
  useEffect(() => {
    if (showSuccess && countdown > 0) {
      timerRef.current = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (showSuccess && countdown === 0) {
      // Auto close after countdown
      handleClose();
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [showSuccess, countdown]);

  if (!isOpen) return null;

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 },
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={!showSuccess ? handleClose : undefined}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />

          {/* Modal Container */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden pointer-events-auto relative">
              {/* Decorative Top Bar */}
              <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>

              {/* Close Button - Hide during success countdown */}
              {!showSuccess && (
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                  <X className="w-5 h-5" />
                </motion.button>
              )}

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-8px)] p-8">
                <AnimatePresence mode="wait">
                  {showSuccess ? (
                    // Success Screen
                    <motion.div
                      key="success"
                      variants={successVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="text-center py-8">
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
                    </motion.div>
                  ) : (
                    // Form Screen
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}>
                      {/* Header */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                          {dynamicClick
                            ? "Book Free Demo Class"
                            : "Fill form to view brochure"}
                        </h2>
                        <p className="text-gray-600">
                          Start learning{" "}
                          <span className="text-orange-500 font-semibold">
                            {courseTitle}
                          </span>
                        </p>
                      </motion.div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Field */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="customerName"
                              value={formData.customerName}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("customerName")}
                              onBlur={() => setFocusedField(null)}
                              required
                              className={`w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 text-sm transition-colors ${
                                validationErrors.customerName
                                  ? "border-red-500"
                                  : focusedField === "customerName"
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
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              name="customerEmail"
                              value={formData.customerEmail}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("customerEmail")}
                              onBlur={() => setFocusedField(null)}
                              required
                              className={`w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 text-sm transition-colors ${
                                validationErrors.customerEmail
                                  ? "border-red-500"
                                  : focusedField === "customerEmail"
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
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mobile Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              name="customerMobile"
                              value={formData.customerMobile}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("customerMobile")}
                              onBlur={() => setFocusedField(null)}
                              required
                              className={`w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 text-sm transition-colors ${
                                validationErrors.customerMobile
                                  ? "border-red-500"
                                  : focusedField === "customerMobile"
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
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Message (Optional)
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <textarea
                              name="customerComment"
                              value={formData.customerComment}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("customerComment")}
                              onBlur={() => setFocusedField(null)}
                              rows={3}
                              className={`w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 text-sm transition-colors resize-none ${
                                focusedField === "customerComment"
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
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          whileHover={{ scale: 1.02 }}
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
                              {dynamicClick
                                ? "Book Free Demo Class"
                                : "View Brochure"}
                            </>
                          )}
                        </motion.button>

                        {/* Privacy Note */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          className="text-center text-xs text-gray-500 mt-4">
                          🔒 Your information is secure and will not be shared
                        </motion.p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;
