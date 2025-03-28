"use client";

import { useState } from "react";
import { Mail, Loader2, Save } from "lucide-react";

export default function NotificationSettings() {
  const [notificationForm, setNotificationForm] = useState({
    email: true,
    push: false,
    sms: true,
    newsletter: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const updateNotificationForm = (field: string, value: boolean) => {
    setNotificationForm({ ...notificationForm, [field]: value });
  };

  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simuler un appel API
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Préférences de notification mises à jour");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Préférences de notification
        </h2>
        {successMessage && (
          <div className="mb-4 text-green-600">{successMessage}</div>
        )}
        <form onSubmit={handleNotificationSubmit}>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <div>
                <h3 className="font-medium text-gray-900">
                  Notifications par email
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Recevez des notifications par email concernant vos messages,
                  réservations et mises à jour.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notificationForm.email}
                  onChange={(e) =>
                    updateNotificationForm("email", e.target.checked)
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <div>
                <h3 className="font-medium text-gray-900">
                  Notifications push
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Recevez des notifications en temps réel sur votre appareil.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notificationForm.push}
                  onChange={(e) =>
                    updateNotificationForm("push", e.target.checked)
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <div>
                <h3 className="font-medium text-gray-900">Notifications SMS</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Recevez des notifications importantes par SMS.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notificationForm.sms}
                  onChange={(e) =>
                    updateNotificationForm("sms", e.target.checked)
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <div>
                <h3 className="font-medium text-gray-900">Newsletter</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Recevez nos newsletters et informations marketing.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notificationForm.newsletter}
                  onChange={(e) =>
                    updateNotificationForm("newsletter", e.target.checked)
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-200">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4 mr-2" />
                    Enregistrement...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Enregistrer les préférences
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
