import React, { useState } from 'react';
import { GraduationCap, CheckCircle, XCircle, X } from 'lucide-react';

const Verify: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<null | { isVerified: boolean; message: string }>(null);
  const [loading, setLoading] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateImageUrl, setCertificateImageUrl] = useState<string | null>(null);

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setVerificationStatus(null);
    setShowCertificate(false);

    const imageUrl = `https://tech-codistic.onrender.com/certificates/${studentId}`;

    try {
      const response = await fetch(imageUrl, { method: 'HEAD' });

      if (response.ok) {
        setVerificationStatus({
          isVerified: true,
          message: 'Certificate verified successfully!',
        });
        setCertificateImageUrl(imageUrl);
        setShowCertificate(true); // ✅ automatically show the certificate popup
      } else {
        throw new Error('Certificate not found');
      }
    } catch (error: any) {
      setVerificationStatus({
        isVerified: false,
        message: error.message || 'Verification failed',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Certificate Verification
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Verify the authenticity of TechCodistic certificates by entering the certificate ID below.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
            <form onSubmit={handleVerification} className="space-y-6">
              <div>
                <label
                  htmlFor="studentId"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Certificate ID
                </label>
                <input
                  type="text"
                  id="studentId"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="Enter certificate ID (e.g., TC12345678)"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              {verificationStatus && (
                <div
                  className={`flex items-center gap-2 p-4 rounded-md ${
                    verificationStatus.isVerified
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                  }`}
                >
                  {verificationStatus.isVerified ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p>{verificationStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-70 gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                {loading ? 'Verifying...' : 'Verify Certificate'}
              </button>
            </form>

            {/* FAQ */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <h4 className="font-medium text-blue-500">Where can I find my certificate ID?</h4>
                  <p className="mt-2">
                    Your certificate ID is located at the bottom of your certificate document. It starts with "TC"
                    followed by 8 digits.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium text-blue-500">How long is my certificate valid?</h4>
                  <p className="mt-2">
                    TechCodistic certificates do not expire. Once issued, they remain valid indefinitely.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium text-blue-500">What if my certificate cannot be verified?</h4>
                  <p className="mt-2">
                    If your certificate cannot be verified, please contact our support team at
                    techcodistic@gmail.com with your certificate details.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Image Modal */}
      {showCertificate && certificateImageUrl && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg relative max-w-3xl w-full">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 dark:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={certificateImageUrl}
              alt="Verified Certificate"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Verify;
