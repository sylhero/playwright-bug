FROM mcr.microsoft.com/playwright:v1.34.2-jammy
WORKDIR /project
ADD sample /project
RUN npm install && npx playwright install-deps && npx playwright install
CMD npx playwright test example


