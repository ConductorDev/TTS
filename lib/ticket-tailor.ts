interface TicketTailorEvent {
  name: string;
  start_date: string;
  end_date: string;
  status: string;
}

export async function getUpcomingEvents(): Promise<string[]> {
  try {
    const response = await fetch('https://api.tickettailor.com/v1/events', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${Buffer.from(process.env.TICKET_TAILOR_API_TOKEN || '').toString('base64')}`
      }
    });

    if (!response.ok) {
      console.error('Failed to fetch events from Ticket Tailor');
      return getDefaultEvents();
    }

    const data = await response.json();
    const events = data.data as TicketTailorEvent[];
    
    return events
      .filter(event => event.status === 'published')
      .map(event => {
        const date = new Date(event.start_date);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        let dateText = date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          month: 'short', 
          day: 'numeric' 
        });
        
        if (date.toDateString() === today.toDateString()) {
          dateText = 'Tonight';
        } else if (date.toDateString() === tomorrow.toDateString()) {
          dateText = 'Tomorrow';
        }
        
        return `${dateText}: ${event.name}`;
      });
  } catch (error) {
    console.error('Error fetching events:', error);
    return getDefaultEvents();
  }
}

function getDefaultEvents(): string[] {
  return [
    "Every 1st & 3rd Friday: Kentucky Unplugged Series",
    "Every 1st & 3rd Saturday: Cody Lee Meece",
    "Check our website for more upcoming events!",
  ];
}
