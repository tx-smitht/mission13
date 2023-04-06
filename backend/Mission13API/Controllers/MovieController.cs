using Microsoft.AspNetCore.Mvc;
using Mission13API.Data;

namespace Mission13API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {

        private MovieDbContext context;

        public MovieController(MovieDbContext dbContext)
        {
            context = dbContext;
        }

        public IEnumerable<Movie> Get()
        {
            // Returns an array of only movies that have been edited
            // in alphabetical order. 

            var x = context.Movies.ToArray();

            return context.Movies.Where(x=>x.Edited == "Yes").OrderBy(x=> x.Title).ToArray();
        }
    }
}
