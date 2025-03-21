"use client"

import type React from "react"

import { useState } from "react"
import { X, Calendar, Clock, Check, Loader2 } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  photographerName: string
  photographerId?: string
  services?: {
    name: string
    price: string
  }[]
}

export default function BookingModal({
  isOpen,
  onClose,
  photographerName,
  photographerId,
  services = [],
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    location: "",
    details: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 2

  // Fermer la modal et réinitialiser le formulaire
  const handleClose = () => {
    onClose()
    // Réinitialiser le formulaire après un délai pour éviter de voir la réinitialisation
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        location: "",
        details: "",
      })
      setErrors({})
      setIsSubmitted(false)
      setCurrentStep(1)
    }, 300)
  }

  // Mettre à jour les données du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Effacer l'erreur pour ce champ si elle existe
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Valider l'étape actuelle du formulaire
  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.service) newErrors.service = "Veuillez sélectionner un service"
      if (!formData.date) newErrors.date = "Veuillez sélectionner une date"
      if (!formData.location.trim()) newErrors.location = "Veuillez indiquer un lieu"
    } else if (step === 2) {
      if (!formData.name.trim()) newErrors.name = "Veuillez entrer votre nom"
      if (!formData.email.trim()) {
        newErrors.email = "Veuillez entrer votre email"
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Veuillez entrer un email valide"
      }
      if (!formData.phone.trim()) newErrors.phone = "Veuillez entrer votre numéro de téléphone"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Passer à l'étape suivante
  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  // Revenir à l'étape précédente
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Soumettre le formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(currentStep)) return

    setIsSubmitting(true)

    try {
      // Simulation d'un appel API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Réservation soumise:", {
        ...formData,
        photographerId,
        photographerName,
      })

      setIsSubmitted(true)
    } catch (error) {
      console.error("Erreur lors de la réservation:", error)
      setErrors({ form: "Une erreur est survenue lors de la réservation. Veuillez réessayer." })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Si la modal n'est pas ouverte, ne rien afficher
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div 
        className="relative w-full max-w-md bg-white rounded-lg shadow-xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6">
          {!isSubmitted ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Réserver une séance</h2>
              <p className="text-gray-600 mb-4">avec {photographerName}</p>
              
              {/* Indicateur d'étape */}
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-medium text-teal-600">
                    Étape {currentStep} sur {totalSteps}
                  </span>
                  <span className="text-xs font-medium text-teal-600">
                    {Math.round((currentStep / totalSteps) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-teal-600 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {errors.form && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                  {errors.form}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                {/* Étape 1: Détails de la séance */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Type de séance *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`block w-full px-3 py-2 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.length > 0 ? (
                          services.map((service, index) => (
                            <option key={index} value={service.name}>
                              {service.name} ({service.price})
                            </option>
                          ))
                        ) : (
                          <>
                            <option value="wedding">Mariage Complet (à partir de 2200 €)</option>
                            <option value="engagement">Séance Couple/Engagement (à partir de 350 €)</option>
                            <option value="portrait">Séance Portrait (à partir de 250 €)</option>
                            <option value="family">Séance Famille (à partir de 300 €)</option>
                            <option value="custom">Projet sur mesure (tarif à définir)</option>
                          </>
                        )}
                      </select>
                      {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                    </div>
                    
                    {/* Date */}
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Date souhaitée *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`block w-full pl-10 pr-3 py-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                        />
                      </div>
                      {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                    </div>
                    
                    {/* Heure */}
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Heure préférée
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">Optionnel - à confirmer avec le photographe</p>
                    </div>
                    
                    {/* Lieu */}
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Lieu de la séance *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`block w-full px-3 py-2 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                        placeholder="Ville ou adresse précise"
                      />
                      {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                    </div>
                    
                    {/* Détails */}
                    <div>
                      <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                        Détails supplémentaires
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={3}
                        value={formData.details}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        placeholder="Précisez vos attentes, le nombre de personnes, etc."
                      ></textarea>
                    </div>
                  </div>
                )}
                
                {/* Étape 2: Informations personnelles */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    {/* Nom */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                        placeholder="Votre nom"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                        placeholder="votre.email@exemple.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    
                    {/* Téléphone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm`}
                        placeholder="Votre numéro de téléphone"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm text-gray-600">
                      <p className="font-medium mb-2">Récapitulatif de votre demande :</p>
                      <ul className="space-y-1">
                        <li><span className="font-medium">Service :</span> {formData.service}</li>
                        <li><span className="font-medium">Date :</span> {formData.date ? new Date(formData.date).toLocaleDateString() : 'Non spécifiée'}</li>
                        {formData.time && <li><span className="font-medium">Heure :</span> {formData.time}</li>}
                        <li><span className="font-medium">Lieu :</span> {formData.location}</li>
                      </ul>
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      En soumettant ce formulaire, vous acceptez d'être contacté par le photographe pour finaliser les détails de votre réservation.
                    </p>
                  </div>
                )}
                
                {/* Boutons de navigation */}
                <div className="mt-6 flex justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Précédent
                    </button>
                  ) : (
                    <div></div> {/* Espace vide pour maintenir l'alignement */}
                  )}
                  
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Suivant
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin h-4 w-4 mr-2" />
                          Réservation en cours...
                        </>
                      ) : (
                        "Confirmer la réservation"
                      )}
                    </button>
                  )}
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Réservation envoyée !</h2>
              <p className="text-gray-600 mb-6">
                Votre demande de réservation a bien été envoyée à {photographerName}. Vous recevrez une confirmation par email dans les plus brefs délais.
              </p>
              <button
                onClick={handleClose}
                className="inline-flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

