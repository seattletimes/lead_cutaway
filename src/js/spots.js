define(function() {
  return {
    contamination: [
      {
        bounds: {
          top: 34,
          left: 52
        },
        data: {
          title: "1.5x permissible level",
          text: "Airborne lead at the gun-rental counter",
          lead: 74,
          acceptable: 50,
          unit: 3
        }
      },
      {
        bounds: {
          top: 49,
          left: 40
        },
        data: {
          title: "244x acceptable level",
          text: "Lead on the floor of a shooting booth",
          lead: 48865,
          acceptable: 200,
          unit: 2,
          photo: "shooting_bay.jpg"
        },
      },
      {
        bounds: {
          top: 49,
          left: 14
        },
        data: {
          title: "46x permissible level",
          text: "Airborne lead during after-hours range cleaning",
          lead: 2300,
          acceptable: 50,
          unit: 3,
          photo: "sweeping_range.jpg"
        }
      },
      {
        bounds: {
          top: 48,
          left: 78
        },
        data: {
          title: "115x acceptable level",
          text: "Lead on the top of a soft-drink machine near the lobby",
          lead: 23056,
          acceptable: 200,
          unit: 2
        }
      }
    ],
    narrative: [
      {
        bounds: {
          top: 33,
          left: 50
        },
        data: {
          title: "Employee at counter",
          text: "A range master at Champion was overexposed to lead-contaminated air. By law, a range must ensure that an employee is not exposed to more than 50 micrograms of lead per cubic meter of air over eight hours. The range was cited for not providing protective gear, such as coveralls and respirators. ",
          photo: "range_counter.jpg"
        }
      },
      {
        bounds: {
          top: 33,
          left: 94
        },
        data: {
          title: "Employee in retail area",
          text: "When workers face exposure to high amounts of airborne lead, their employer must test their blood for lead when hired and every six months thereafter. Champion was cited for not doing this.",
          photo: "retail_counter.jpg"
        }
      },
      {
        bounds: {
          top: 30,
          left: 40
        },
        data: {
          title: "Ventilation",
          text: "Champion failed to have a ventilation system that pulled dirty air away from shooters to the back of the range, where lead dust could be captured and removed. Champion didn’t perform ventilation checks every three months, as required.",
          photo: "ventilation.jpg"
        }
      },
      {
        bounds: {
          top: 47,
          left: 78
        },
        data: {
          title: "Soda machine",
          text: "Gun ranges must maintain surfaces as free of lead as practicable. At Champion, state inspectors found lead dust coating the top of a soft-drink machine and on surfaces in the retail sales area."
        }
      },
      {
        bounds: {
          top: 60,
          left: 12
        },
        data: {
          title: "Owner in lane",
          text: "Champion's owner Maria Geiss used a dry mop to sweep the firing-range floor, causing lead dust to become airborne. She should have cleaned the range with a HEPA (high-efficiency particulate air) vacuum, a squeegee or a wet mop."
        }
      },
      {
        bounds: {
          top: 20,
          left: 38
        },
        data: {
          title: "Double-door area",
          text: "To open the door into the range, customers and workers should have had to use more force than usual, indicating suction or negative air flow. Champion’s range had the reverse: Opening the door blew lead particles onto people and into the lobby."
        }
      }
    ]
  };
});