/**
 * API Client for UI
 * Handles all API requests to the backend
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://land-api.uni-co-group.com";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface CompanyInfo {
  id: string;
  name: string;
  nameEn: string;
  address: string;
  address2?: string;
  established: string;
  representative: string;
  license: string;
  organization?: string;
  phone: string;
  email: string;
  hours: string;
  closed?: string;
  logoUrl?: string;
  greeting?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  titleJp: string;
  titleVi: string;
  description: string;
  descriptionJp: string;
  descriptionVi: string;
  content?: string;
  contentJp?: string;
  contentVi?: string;
  images: string[];
  orderIndex: number;
  isActive: number;
  createdAt: string;
  updatedAt: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      // Let the browser handle HTTP caching based on API Cache-Control headers
      cache: "default",
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get company information
   */
  async getCompanyInfo(): Promise<CompanyInfo> {
    const response = await this.request<CompanyInfo>("/api/company");
    return response.data;
  }

  /**
   * Get all services
   * @param active - Only return active services
   * @param locale - Locale for localized fields (jp or vi)
   */
  async getServices(
    active: boolean = true,
    locale: string = "jp"
  ): Promise<Service[]> {
    const params = new URLSearchParams();
    if (active) {
      params.append("active", "true");
    }
    params.append("locale", locale);

    const response = await this.request<Service[]>(
      `/api/services?${params.toString()}`
    );
    return response.data;
  }

  /**
   * Get a single service by ID
   * @param id - Service ID
   * @param locale - Locale for localized fields (jp or vi)
   */
  async getService(
    id: string,
    locale: string = "jp"
  ): Promise<Service> {
    const params = new URLSearchParams();
    params.append("locale", locale);

    const response = await this.request<Service>(
      `/api/services/${id}?${params.toString()}`
    );
    return response.data;
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export default for convenience
export default api;
