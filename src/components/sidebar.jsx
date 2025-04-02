"use client"

import { useState } from "react";
import { setFavoriteStatus } from "../../service/api-service";
import { Star } from "lucide-react";
// import { setFavoriteStatus } from "../services/api";
// import { Star } from "iconsax-react";

export default function Sidebar({ workspaces, favorites }) {
  const [updatedFavorites, setUpdatedFavorites] = useState(favorites || []);
  console.log(Array.isArray(updatedFavorites), updatedFavorites);

  const toggleFavorite = async (workspaceId, isFavorite) => {
    try {
      const newFavoriteStatus = !isFavorite; // Toggle current status
      await setFavoriteStatus(workspaceId, newFavoriteStatus);

      // Update UI state
      setUpdatedFavorites((prevFavorites) =>
        prevFavorites.map((fav) =>
          fav.id === workspaceId ? { ...fav, isFavorite: newFavoriteStatus } : fav
        )
      );
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <div className="px-4 py-2 mt-4">
      <div className="flex items-center justify-between mb-2 text-gray-500">
        <h2 className="text-sm font-medium">Favorite</h2>
      </div>

      <ul className="space-y-2">
        {updatedFavorites.map((favorite) => (
          <li key={favorite.id} className="flex items-center justify-between p-2 rounded hover:bg-gray-100">
            <span>{favorite.name}</span>
            <button onClick={() => toggleFavorite(favorite.id, favorite.isFavorite)}>
              <Star
                size="20"
                color={favorite.isFavorite ? "#FFD700" : "#A0AEC0"} // Yellow when active, gray when inactive
                variant={favorite.isFavorite ? "Bold" : "Outline"} // Filled when active, outlined when inactive
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
