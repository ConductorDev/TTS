import { Star } from 'lucide-react';
import { Card } from '../ui/card';
import { useEffect, useState } from 'react';

interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
}

interface PlaceDetails {
  result: {
    reviews: Review[];
    rating: number;
    user_ratings_total: number;
  };
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data: PlaceDetails = await response.json();

        if (!response.ok) throw new Error('Failed to fetch reviews');
        
        setReviews(data.result.reviews);
      } catch (err) {
        setError('Failed to load reviews');
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div className="text-center py-8">Loading reviews...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <img
                  src={review.profile_photo_url}
                  alt={`${review.author_name}'s profile`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{review.author_name}</h3>
                  <div className="flex items-center space-x-1 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {review.relative_time_description}
                  </p>
                  <p className="text-sm">{review.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
