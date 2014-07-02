(function () {
      describe("Template.TodosIndex", function () {

        it("should return todos sorted by their createdAt date descending", function () {
          todos = {}
          Todos.find = function(selector, options) {
            expect(options.sort.createdAt).toBe(-1)
            return todos
          }
          expect(Template.TodosIndex.items()).toBe(todos)
        });
      });
    })();

