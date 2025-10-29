"use client";

import { motion } from "framer-motion";

export default function InvitationPage() {
    return (
        <div className="text-center bg-white/90 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl max-w-lg">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-pink-600 mb-4"
            >
                Ashik ❤️ Firthoush
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-gray-700 text-lg mb-6"
            >
                With the grace of Almighty, we’re thrilled to invite you to our <b>Nikkah</b> ceremony!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="border border-pink-300 p-6 rounded-2xl"
            >
                <p className="text-lg mb-2 text-gray-800">
                    <b>Date:</b> February 1 2026
                </p>
                <p className="text-lg mb-2 text-gray-800">
                    <b>Venue:</b> Crescent Convention Hall, Chennai
                </p>
                <p className="text-gray-600 italic">
                    “Two hearts, one soul, one love forever.”
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="mt-8"
            >
                <a
                    href="https://maps.app.goo.gl/H1NFj9b9VwWckJoe7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full shadow-lg transition-all"
                >
                    📍 View Location
                </a>
            </motion.div>
        </div>
    );
}
