import React, { createContext, useContext, useEffect, useState } from "react";

const SSEContext = createContext(null);

export const SSEProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const evtSource = new EventSource(
      `${import.meta.env.VITE_API_BASE_URL}/events`,
    );

    evtSource.onmessage = (event) => {
      try {
        const update = JSON.parse(event.data);
        setEvents((prev) => [...prev, update]);
      } catch (err) {
        console.error("Error parsing SSE update:", err);
      }
    };

    evtSource.onerror = (err) => {
      console.error("SSE connection error:", err);
      evtSource.close();
    };

    return () => {
      evtSource.close();
    };
  }, []);

  return <SSEContext.Provider value={events}>{children}</SSEContext.Provider>;
};

export const useSSE = () => {
  return useContext(SSEContext);
};
