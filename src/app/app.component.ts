import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'facebookMetaApiFront';

  // Form model
  model: {
    societyName: string;
    state: string;
    district: string;
    city: string;
    demoDate: string; // yyyy-MM-dd
    demoTime: string; // HH:mm
  } = {
    societyName: '',
    state: '',
    district: '',
    city: '',
    demoDate: '',
    demoTime: '',
  };

  // Data: states, districts by state, cities by district
  states: string[] = ['Gujarat', 'Maharashtra', 'Rajasthan'];

  districtsByState: Record<string, string[]> = {
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Rajasthan: ['Jaipur', 'Udaipur'],
  };

  citiesByDistrict: Record<string, string[]> = {
    Ahmedabad: ['Maninagar', 'Navrangpura', 'Gota', 'Bopal'],
    Surat: ['Adajan', 'Varachha', 'Katargam'],
    Vadodara: ['Alkapuri', 'Gotri', 'Manjalpur'],
    Rajkot: ['Kalavad Road', '150 Feet Ring Road'],

    Mumbai: ['Andheri', 'Bandra', 'Dadar'],
    Pune: ['Kothrud', 'Hinjawadi', 'Viman Nagar'],
    Nagpur: ['Dharampeth', 'Sadar'],

    Jaipur: ['Malviya Nagar', 'Vaishali Nagar'],
    Udaipur: ['Hiran Magri', 'Fatehpura'],
  };

  constructor(private http: HttpClient) {}

  get filteredDistricts(): string[] {
    return this.model.state
      ? this.districtsByState[this.model.state] || []
      : [];
  }

  get filteredCities(): string[] {
    return this.model.district
      ? this.citiesByDistrict[this.model.district] || []
      : [];
  }

  onStateChange(): void {
    this.model.district = '';
    this.model.city = '';
  }

  onDistrictChange(): void {
    this.model.city = '';
  }

  onSave(): void {
    this.http.post('http://localhost:3000/save-demo', this.model).subscribe({
      next: (res) => {
        console.log('✅ Demo saved & WhatsApp message sent', res);
        alert('Demo booked! Check WhatsApp.');
      },
      error: (err) => {
        console.error('❌ Save error:', err);
        alert('Failed to save demo.');
      },
    });
  }

  onCancel(form?: any): void {
    this.model = {
      societyName: '',
      state: '',
      district: '',
      city: '',
      demoDate: '',
      demoTime: '',
    };
    if (form) {
      form.resetForm();
    }
  }
}
