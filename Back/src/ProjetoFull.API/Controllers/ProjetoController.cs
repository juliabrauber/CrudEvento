using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProjetoFull.API.Data;
using ProjetoFull.API.Models;

namespace ProjetoFull.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjetoController : ControllerBase
    {  
        private readonly DataContext _context;
        public ProjetoController(DataContext context )
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Projeto> Get()
        {

            return _context.Projetos;

        }
        [HttpGet("{id}")]
        public IEnumerable<Projeto> GetById(int id)
        {

            return _context.Projetos.Where(Projeto => Projeto.ProjetoId == id);

        }
        [HttpPost]
        public string Post()
        {
            return "Metodo Post";
        }

        [HttpPut]
        public string Put()
        {
            return "Metodo Put";
        }
        [HttpDelete]
        public string Delete()
        {
            return "Metodo Delete";
        }
    }
}

