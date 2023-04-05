using Microsoft.AspNetCore.Mvc;

namespace Mission13API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {

        private MovieDbContext context;

        public MovieController(MovieDbContext dbContext)
        {
            _foodService = foodService;
            context = dbContext;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
