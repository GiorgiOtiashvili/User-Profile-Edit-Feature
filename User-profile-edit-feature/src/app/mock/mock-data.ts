import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockData implements InMemoryDbService {
  createDb() {
    const data = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '599112233',
        profilePicture:
          'data:image/webp;base64,UklGRsYEAABXRUJQVlA4TLkEAAAv/8F/ABcgEEj87UJ5G4FA4m8XyhsIBBJ/u1DeYP4DfxXQjba9jSQBrFoY9Pb0IQREgVO+VuOfQhQMAcasTwNTRXxpUgE/v384Jyei/xNgXv3/6v9X/1/9+wr8YBV7xDpZtR6x/aBVxr7TKeKoVakc+kijr3E4aVSPwemTcTLo83QGVpuI06M25VxSJqKh1WVu4XSpLYIqE5qqUtpYTdB2VCQ3CoqURtAjorVVIzdzapRmXg00D1rkdvhQidIBD1aF2gMPGkzo+5ECcydYfkuvQC+i+8Au9wvsSj9YclXAyC1CYOKWJcBSKyJGalVEYhYhk1kW4ogVISOxKiTxipDKK4sZaBUxjlYV41lFiA2sshywmgVZUouggRQEj5wmSZ5TlhQ4FUmJU5UEThBtGU3qzbIGRkWWY1RljYQiZPsbYrKswMgs6mVRiZKp6mVJ4BTVM4sky2lWb1LPSBpIVfUW9Wb18jPKkZrUi4IGUkaQU29gVV/8lr9O7O0zL33p9oXb59UbaVX1FjGOVhUzqGfVM9ol9YJ6nteiXpXieC1SBvWsdsloF9TzxIoQR2wWMqhniGcZgdkkwxOL72Q4YgUyLTFoF6UkS2uSAqdeoJXFQL9BPafeePv8XZluX1TP3L8qZrwty7PJ0SpiBlqzGHtbspRkaE/qRSmBl5Hi1RuJVfUWIQOxWb0sxKpniEcZiZmpIgK1IsJTyyIcNSPCcssCHgz5qdv3hn3slcztMX91BAXqM8crsKhXnjmjAnMnd4Nyp0GBqZNVIHYyGvZJKtQuQYWli1dh7jKqkLsMKkxdrAqmRzI6Lh2CEqXDqETu4JSYOlglTLtktCzNvBpzM6dGbGbVMLVRMnoujbwitZFTBI3H+xRbeT0m9XKrcPuSHnMr3Kes3tQq6WFaBUWWRqMO42pu5Iwx0bHLfpUbDavEroaVaWSMMRkDtwxsLE3CaobnVgC7yk38qgCWWQQwrGITtzMyKwDcyiwtzLoCIBYBwG/kBuHAyOtxFTZMA7eKWPOqK2yVc3Y1bThWGZvDRjzlzXreAKu6NW6YcmbYKFuOU8a234onktmsW8lSqjtpyzwesxsRu55Rxr7dMk9HvNmc9mAJ4aDbiXUvme35QOAzHwk7JtatZHeWA3BsIg7vmfhu9aPZx9FkyZRjbs8Y8+VX5mA+BM8l4rg/dLwcwxsqTyfQrJ5ITDLOukYRZz2Reio1KqdgaTzivG2D84lFREPfJDfARyRKC9gWtQUsha/R1Df4Gk0fKNQ2cOdqGzgCGY3TqYzG6XoRzT86g+bucnM7uGNP7dLVInq+OVLQ0V3ssQs+3HuHnulitQ9+tKuvK/q6S2X0/+FXdE+XqgJEDhfK4OgvVEmk60SwdJeZafjLVBrpKhE87UVmIu4iC5FwkUoE15jA1F5ipuIuUaiMl6hUwiVANV1h4gJ7gUxmuEAh4y6wkPEXqOqBbJIX1ZvYwIrL6s10nLii3kJnFFfpeHGgG6TF+5GkTXwgLd8QK2xWrxAa1HPClttXCY3PLBD2z6t4R4Ks6Y4kWfn2zXcELyvlRcqKWl786i0ZnlX4u0/828/Eyak3qOfUG9RzkrJ65i1l8+r/V/+/Wh4A',
      },
    ];
    return { data };
  }
}
