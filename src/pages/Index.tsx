import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { CONTACTS } from '@/config/contacts';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const examples = [
    {
      title: 'Свадебная песня',
      description: 'Романтичная композиция для первого танца молодоженов',
      image: 'https://cdn.poehali.dev/projects/5014d5da-a487-4aad-b968-ec5fbce6709f/files/c3596661-61c9-417e-8b7e-b9756f5e5196.jpg',
      rating: 5,
      category: 'Свадьба'
    },
    {
      title: 'Корпоративный гимн',
      description: 'Энергичная песня для командного мероприятия',
      image: 'https://cdn.poehali.dev/projects/5014d5da-a487-4aad-b968-ec5fbce6709f/files/a4a9679b-9105-4da1-a49b-fa02cf625d83.jpg',
      rating: 5,
      category: 'Корпоратив'
    },
    {
      title: 'День рождения',
      description: 'Веселая персонализированная поздравительная песня',
      image: 'https://cdn.poehali.dev/projects/5014d5da-a487-4aad-b968-ec5fbce6709f/files/254f9ee0-5fa5-4b2a-ac67-7300fa82c04a.jpg',
      rating: 5,
      category: 'День рождения'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Невероятная песня! Все гости были в восторге на нашей свадьбе. Профессиональное исполнение и индивидуальный подход.',
      rating: 5,
      event: 'Свадьба'
    },
    {
      name: 'Дмитрий Иванов',
      text: 'Заказывали корпоративный гимн для компании. Результат превзошел все ожидания! Команда в восторге.',
      rating: 5,
      event: 'Корпоратив'
    },
    {
      name: 'Мария Сидорова',
      text: 'Лучший подарок для мамы на юбилей! Песня получилась очень трогательной и душевной. Спасибо!',
      rating: 5,
      event: 'Юбилей'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              Закажите песню для вашего мероприятия
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
              Профессиональные музыканты создадут уникальную композицию специально для вас
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
                onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Music" className="mr-2" />
                Заказать песню
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
                onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Play" className="mr-2" />
                Примеры работ
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={40} />
        </div>
      </section>

      <section id="examples" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Примеры наших работ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Послушайте композиции, которые мы создали для различных мероприятий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {example.category}
                    </span>
                  </div>
                  <Button 
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 hover:bg-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Play" className="text-primary" size={28} />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{example.title}</h3>
                  <p className="text-muted-foreground mb-4">{example.description}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(example.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order-form" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Заказать песню
            </h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card className="border-2 shadow-2xl animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Тип мероприятия</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Выберите тип мероприятия" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Свадьба</SelectItem>
                      <SelectItem value="birthday">День рождения</SelectItem>
                      <SelectItem value="corporate">Корпоратив</SelectItem>
                      <SelectItem value="anniversary">Юбилей</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Детали заказа</label>
                  <Textarea 
                    placeholder="Расскажите о вашем мероприятии и пожеланиях к песне..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-14 text-lg bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
                >
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят те, кто уже заказал песни у нас
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                    </div>
                    <Icon name="Quote" className="text-primary/20" size={40} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <Icon name="Phone" className="mx-auto mb-6" size={60} />
          <h2 className="text-5xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl mb-8 opacity-90">
            Готовы обсудить ваш проект? Мы всегда на связи!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a 
              href={`mailto:${CONTACTS.email}`}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 block"
            >
              <Icon name="Mail" className="mx-auto mb-4" size={40} />
              <p className="font-semibold text-lg mb-2">Email</p>
              <p className="hover:underline">{CONTACTS.email}</p>
            </a>
            
            <a 
              href={`tel:${CONTACTS.phone.replace(/\D/g, '')}`}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 block"
            >
              <Icon name="Phone" className="mx-auto mb-4" size={40} />
              <p className="font-semibold text-lg mb-2">Телефон</p>
              <p className="hover:underline">{CONTACTS.phone}</p>
            </a>
            
            <a 
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 block"
            >
              <Icon name="MessageCircle" className="mx-auto mb-4" size={40} />
              <p className="font-semibold text-lg mb-2">Telegram</p>
              <p className="hover:underline">{CONTACTS.telegram}</p>
            </a>
          </div>

          <div className="flex gap-6 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-full px-6 hover:scale-105 transition-transform"
              asChild
            >
              <a href={`https://instagram.com/${CONTACTS.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                <Icon name="Instagram" className="mr-2" />
                Instagram
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-full px-6 hover:scale-105 transition-transform"
              asChild
            >
              <a href={`https://${CONTACTS.vk}`} target="_blank" rel="noopener noreferrer">
                <Icon name="Share2" className="mr-2" />
                VK
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white text-center">
        <p className="text-sm opacity-80">
          © 2024 Заказ песен. Все права защищены.
        </p>
      </footer>
    </div>
  );
};

export default Index;