import { Bookmark, MapPin } from "lucide-react";
import React, { useState } from "react";

const Card = () => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="w-full max-w-md rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"
            alt="Amazon"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">Amazon</h3>
            <p className="text-xs text-muted-foreground">5 days ago</p>
          </div>
        </div>

        <button
          onClick={() => setIsSaved(!isSaved)}
          className="p-2 hover:bg-accent rounded-md transition-colors"
          aria-label="Save job"
        >
          <Bookmark
            className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Senior UI/UX Designer</h2>

        <div className="flex gap-2">
          <span className="px-3 py-1 bg-accent text-xs rounded-full">
            Part-time
          </span>
          <span className="px-3 py-1 bg-accent text-xs rounded-full">
            Senior level
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-lg font-semibold">$120/hour</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, India</span>
            </div>
          </div>

          <button className="px-5 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Apply
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
