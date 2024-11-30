[
  {
    default_price: "60.00",
    description: "Basic Drying the clothes",
    discount_percentage: null,
    discount_price: "55.00",
    end_date: "2025-10-31T16:00:00.000Z",
    isActive: 1,
    promotion_id: 6,
    service_id: 2,
    service_name: "Dry",
    start_date: "2024-10-31T16:00:00.000Z",
    valid_days: "Monday, Wednesday, Friday",
  },
];

[
  {
    progress: [
      {
        completed: 1,
        description: "Pickup requested; staff on the way.",
        false_description:
          "Pickup request received; waiting for staff assignment.",
        id: 61,
        stage: "Pending Pickup",
        status_date: "2024-11-03T05:02:35.000Z",
      },
      {
        completed: 1,
        description: "Pickup in progress.",
        false_description: "Pickup has not yet started.",
        id: 62,
        stage: "Ongoing Pickup",
        status_date: "2024-11-03T05:03:46.000Z",
      },
      {
        completed: 1,
        description: "Pickup completed successfully.",
        false_description: "Pickup has not been completed.",
        id: 63,
        stage: "Completed Pickup",
        status_date: "2024-11-03T05:03:46.000Z",
      },
      {
        completed: 1,
        description: "Dropped off at the laundry store.",
        false_description: "The clothes have not yet arrived at the store.",
        id: 64,
        stage: "At Store",
        status_date: "2024-11-03T05:03:58.000Z",
      },
      {
        completed: 1,
        description: "Waiting for processing.",
        false_description: "Not yet in queue for processing.",
        id: 65,
        stage: "In Queue",
        status_date: "2024-11-03T05:03:58.000Z",
      },
      {
        completed: 0,
        description: "Currently being washed/dried.",
        false_description: "Laundry has not started processing yet.",
        id: 66,
        stage: "In Laundry",
        status_date: null,
      },
      {
        completed: 0,
        description: "Washing/drying finished.",
        false_description: "Laundry processing has not been completed.",
        id: 67,
        stage: "Laundry Completed",
        status_date: null,
      },
      {
        completed: 0,
        description: "Ready to be delivered.",
        false_description: "Laundry is not yet ready for delivery.",
        id: 68,
        stage: "Ready for Delivery",
        status_date: null,
      },
      {
        completed: 0,
        description: "On the way to you.",
        false_description: "Laundry has not been dispatched yet.",
        id: 69,
        stage: "Out for Delivery",
        status_date: null,
      },
      {
        completed: 0,
        description: "Delivered and payment confirmed.",
        false_description: "Delivery has not been completed.",
        id: 70,
        stage: "Completed Delivery",
        status_date: null,
      },
    ],
    service_request: {
      assignment_id: "Waiting for total amount...",
      customer_fullname: "John Reynald P Velarde",
      customer_id: 2,
      customer_type: "Online",
      delivery_date: "Waiting...",
      id: 7,
      isDelivery: 0,
      isPickup: 1,
      notes: null,
      payment_method: "Cash on Delivery",
      pickup_date: "2024-11-03 13:03:46",
      qr_code: "SR-7-#603DDC0305424E28B0AB",
      qr_code_generated: 1,
      request_date: "2024-11-03T05:02:35.000Z",
      request_status: "Completed Pickup",
      service_default_price: "65.00",
      service_name: "Wash",
      store_id: 1,
      tracking_code: "#603DDC0305424E28B0AB",
      transaction_status: "Waiting...",
      unit_name: "Waiting...",
      unread_messages: 3,
      user_id: 3,
      user_name: "Juan  Tamad",
    },
    total_amount: null,
  },
];

[
  {
    base_total_amount: "20.00",
    discount_applied: { type: "promo_price", value: "20.00" },
    final_total: "30.00",
    related_items: {
      item_ids: ["1"],
      item_names: ["Ariel Soap"],
      item_prices: ["10.00"],
      quantities: ["1"],
      related_item_totals: ["10.00"],
    },
    total_related_items: "10.00",
    weight: "1",
  },
];