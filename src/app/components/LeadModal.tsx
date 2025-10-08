"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { submitLead, resetLead } from "@/store/leadSlice";
import { RootState, AppDispatch } from "@/store";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  courseTitle,
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
      customerComment: ` Interested in ${courseTitle}. ${formData.customerComment}`,
      label: "MERN",
    };

    const result = await dispatch(submitLead(leadData));

    if (result.type === "lead/submit/fulfilled") {
      setFormData({
        customerName: "",
        customerEmail: "",
        customerMobile: "",
        customerComment: "",
      });
      setValidationErrors({});
      setTimeout(() => {
        onClose();
        dispatch(resetLead());
      }, 3000);
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

  useEffect(() => {
    if (isOpen) {
      dispatch(resetLead());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Decorative Top Bar */}
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-300">
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          <div className="p-6">
            {success ? (
              // Success Screen
              <div className="text-center py-6 space-y-4">
                {/* Success Icon */}
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  {/* Sparkles */}
                  <div className="absolute -top-1 -right-1 text-yellow-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="absolute -bottom-1 -left-1 text-yellow-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Success Message */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Success! 🎉
                  </h3>
                  <p className="text-base text-gray-600">
                    Your demo class has been booked!
                  </p>
                  <p className="text-sm text-gray-500">
                    We'll contact you shortly.
                  </p>
                </div>

                {/* Course Info Badge */}
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-full">
                  <p className="text-xs font-medium text-orange-700">
                    <span className="font-bold">{courseTitle}</span>
                  </p>
                </div>

                {/* Emojis */}
                <div className="flex justify-center gap-2 text-xl">
                  <span>🎊</span>
                  <span>✨</span>
                  <span>🎉</span>
                </div>
              </div>
            ) : (
              // Form Screen
              <>
                {/* Header */}
                <div className="text-center mb-5 space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Book Your Free Demo
                  </h2>
                  <p className="text-sm text-gray-600">
                    Start learning{" "}
                    <span className="font-semibold text-orange-600">
                      {courseTitle}
                    </span>
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors ${
                          focusedField === "customerName"
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}>
                        <User className="w-4 h-4" />
                      </div>
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
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        ⚠️ {validationErrors.customerName}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors ${
                          focusedField === "customerEmail"
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}>
                        <Mail className="w-4 h-4" />
                      </div>
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
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        ⚠️ {validationErrors.customerEmail}
                      </p>
                    )}
                  </div>

                  {/* Mobile Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors ${
                          focusedField === "customerMobile"
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}>
                        <Phone className="w-4 h-4" />
                      </div>
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
                        placeholder="+9116213110"
                      />
                    </div>
                    {validationErrors.customerMobile && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        ⚠️ {validationErrors.customerMobile}
                      </p>
                    )}
                  </div>

                  {/* Comment Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute top-3 left-0 pl-3 flex items-start pointer-events-none transition-colors ${
                          focusedField === "customerComment"
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}>
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        name="customerComment"
                        value={formData.customerComment}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("customerComment")}
                        onBlur={() => setFocusedField(null)}
                        rows={2}
                        className={`w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-gray-900 text-sm transition-colors resize-none ${
                          focusedField === "customerComment"
                            ? "border-orange-500"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="Any questions?"
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs">
                      <span>❌</span>
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg">
                    <span className="flex items-center justify-center gap-2 text-sm">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Book Free Demo Class
                        </>
                      )}
                    </span>
                  </button>

                  {/* Privacy Note */}
                  <p className="text-xs text-center text-gray-500">
                    🔒 Your information is secure
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
