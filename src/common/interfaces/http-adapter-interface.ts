export interface HttpAdaptater{
    get<T>(url: string): Promise<T>;
}