  const ContactController = require("../controllers/ContactController");
  const sequelize = require("../db/models/index").sequelize;

  describe('ContactController', () => {
  	it('should be defined', () => {
  		expect(ContactController).toBeDefined();
  	});

  	beforeEach( (done) => {
  		this.book = new ContactController();
  		sequelize.sync({force: true}).then((res) => {
  			done();
  		})
  		.catch((err) => {
  			done();
  		});
  	});

  	describe("#addContact()", () => {
  		it("should add a single contact into the book", (done) => {
  			this.book.addContact("Alice", "444-444-4444")
  			.then((conatct) => {
  				expect(contact.name).toBe("Alice");
  				expect(contact.phone).toBe("444-444-4444");
  				done();
  			})
  			.catch((err) => {
  				done();
  			});
  		});
  	});
});