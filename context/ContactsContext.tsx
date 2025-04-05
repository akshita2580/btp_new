import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db, auth } from '@/config/firebase';

type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: Date;
};

type ContactsContextType = {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
};

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!auth.currentUser) {
      setContacts([]);
      setLoading(false);
      return;
    }

    const contactsRef = collection(db, 'contacts');
    const q = query(contactsRef, where('userId', '==', auth.currentUser.uid));

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const contactsList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate(),
        })) as Contact[];
        
        setContacts(contactsList);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Error fetching contacts:', err);
        setError('Failed to load contacts');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <ContactsContext.Provider value={{ contacts, loading, error }}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (context === undefined) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return context;
}