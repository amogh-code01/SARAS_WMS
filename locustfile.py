from locust import HttpUser, task, between

class SARASUser(HttpUser):
    wait_time = between(2, 5)

    def on_start(self):
        self.client.post("/api/login", json={
            "username": "admin1",
            "password": "Admin@1234"
        })

    @task(4)
    def view_orders(self):
        self.client.get("/api/orders")

    @task(2)
    def view_customers(self):
        self.client.get("/api/customers")

    @task(1)
    def health_check(self):
        self.client.get("/health")