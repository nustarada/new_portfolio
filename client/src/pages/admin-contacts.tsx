import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Mail, MapPin, FileText, MessageSquare, Users, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Contact {
  id: number;
  name: string;
  email: string;
  location: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function AdminContacts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/admin/contacts'],
    queryFn: async () => {
      const response = await fetch('/api/admin/contacts');
      if (!response.ok) throw new Error('Failed to fetch contacts');
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-6 w-96" />
          </div>
          <div className="grid gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <Card className="bg-red-900/20 border-red-500/30">
          <CardContent className="p-6 text-center">
            <p className="text-red-300">Failed to load contacts: {error.message}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const contacts: Contact[] = data?.contacts || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-normal text-white mb-4 modern-heritage">Contact Submissions</h1>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Total: {data?.total || 0}
            </Badge>
            <p className="text-white/70">
              Manage and view all contact form submissions
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6">
          {contacts.length === 0 ? (
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <Mail className="w-16 h-16 text-white/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Contacts Yet</h3>
                <p className="text-white/60">Contact form submissions will appear here</p>
              </CardContent>
            </Card>
          ) : (
            contacts.map((contact) => (
              <Card key={contact.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{contact.name}</CardTitle>
                        <div className="flex items-center space-x-2 text-white/60 mt-1">
                          <Mail className="w-4 h-4" />
                          <span>{contact.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-white/50">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        {format(new Date(contact.createdAt), 'MMM dd, yyyy HH:mm')}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-sm text-white/60">Location</p>
                        <p className="text-white">{contact.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-sm text-white/60">Subject</p>
                        <p className="text-white">{contact.subject}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-5 h-5 text-purple-400 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm text-white/60 mb-2">Project Details</p>
                      <p className="text-white/90 leading-relaxed">{contact.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}